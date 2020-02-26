import os
import requests
import time
import json
from collections import namedtuple


ENV_SECRET_GITHUB = "SECRET_GITHUB"
SECRET_GITHUB = os.environ.get(ENV_SECRET_GITHUB)

GITHUB_ENDPOINT = "https://api.github.com"
API_VERSION = "application/vnd.github.v3+json"

HEADER_OAUTH = "OAUTH-TOKEN"
HEADER_ACCEPT = "Accept"

SYMBOL_USERNAME = "username"
SYMBOL_REPO_OWNER = "repoOwner"
SYMBOL_REPO_OWNER_URL = "repoOwnerUrl"
SYMBOL_REPO_OWNER_AVATAR_URL = "repoOwnerAvatarUrl"
SYMBOL_REPO_NAME = "repoName"
SYMBOL_REPO_URL = "repoUrl"
SYMBOL_REPO_LINES = "repoLines"
SYMBOL_COMMITS = "repoCommits"
SYMBOL_ADDITIONS = "repoAdditions"
SYMBOL_DELETIONS = "repoDeletions"
SYMBOL_NET_ADDITIONS = "repoNetAdditions"
SYMBOL_TOTAL_COMMITS = "repoTotalCommits"
SYMBOL_TOTAL_ADDITIONS = "repoTotalAdditions"
SYMBOL_TOTAL_DELETIONS = "repoTotalDeletions"
SYMBOL_LANGUAGES = "repoLanguages"

LIST_SYMBOLS = [SYMBOL_REPO_OWNER, SYMBOL_REPO_OWNER_URL, SYMBOL_REPO_OWNER_AVATAR_URL, SYMBOL_REPO_NAME, SYMBOL_REPO_URL, SYMBOL_REPO_LINES, SYMBOL_COMMITS, SYMBOL_ADDITIONS, SYMBOL_NET_ADDITIONS, SYMBOL_DELETIONS, SYMBOL_TOTAL_COMMITS, SYMBOL_TOTAL_ADDITIONS, SYMBOL_TOTAL_DELETIONS, SYMBOL_LANGUAGES]

HEADERS = {HEADER_OAUTH: SECRET_GITHUB, HEADER_ACCEPT: API_VERSION}

REFETCH_TIMEOUT = 60 * 24 # 1 Day
USERNAME = "rory660"

class Portfolio:

	def fromFile(filename):
		try:
			with open(filename, "r", encoding="utf-8") as readFile:
				print("Loading portfolio from file...")
				pfDict = json.loads(readFile.read())
				return Portfolio(USERNAME, filename, dictionary = pfDict) 
		except:
			print("Failed to load portfolio from file, constructing a new one from scratch...")
			return Portfolio(USERNAME, filename)


	def __new__(cls, username, filename, dictionary = None):
		if SECRET_GITHUB == None:
			raise NameError(f"No OAuth token env variable found, please set ${ENV_SECRET_GITHUB} (editable inside Portfolio.py) to your OAuth token.")
		return super(Portfolio, cls).__new__(cls)

	def __init__(self, username, filename, dictionary = None):
		if dictionary != None:
			for k, v in dictionary.items():
				setattr(self, k, v)
		else:
			self.username = username
			self.repos = None
			self.entries = []
			self.fetchRepos()
			self.generateEntries()
			self.sortEntries(SYMBOL_ADDITIONS, reverse = True)
			self.filename = filename
			self.save(filename)

	def save(self, filename):
		print(f"saving portfolio to '{filename}'")
		fileData = json.dumps(self, default= lambda o: o.__dict__)
		with open(filename, "w", encoding = "utf-8") as saveFile:
			saveFile.write(fileData)

	def generateEntries(self):
		for repo in self.repos:
			if not repo["private"]:
				entry = self.generateEntry(repo)
				if entry != None:
					self.entries.append(entry)

	def sortEntries(self, symbol, reverse = False):
		self.entries.sort(key = lambda entry : entry.get(symbol))
		if reverse:
			self.entries = self.entries[::-1]

	def fetchRepos(self):
		self.repos = get("/user/repos")
		self.lastFetched = time.time()

	def generateEntry(self, repo):
		entry = {}
		entry[SYMBOL_REPO_OWNER] = repo["owner"]["login"]
		entry[SYMBOL_REPO_OWNER_URL] = repo["owner"]["html_url"]
		entry[SYMBOL_REPO_OWNER_AVATAR_URL] = repo["owner"]["avatar_url"]
		entry[SYMBOL_REPO_NAME] = repo["name"]
		entry[SYMBOL_REPO_URL] = f"https://github.com/{entry[SYMBOL_REPO_OWNER]}/{entry[SYMBOL_REPO_NAME]}"

		print(f"Fetching contributor data for {entry[SYMBOL_REPO_NAME]}")

		contributors = get(f"/repos/{entry[SYMBOL_REPO_OWNER]}/{entry[SYMBOL_REPO_NAME]}/stats/contributors")
		

		totalAdditions = 0
		totalDeletions = 0
		totalCommits = 0
		for contributor in contributors:
			additions = sum([week["a"] for week in contributor["weeks"]])
			deletions = sum([week["d"] for week in contributor["weeks"]])
			totalAdditions += additions
			totalDeletions += deletions
			totalCommits += contributor["total"]
			if contributor["author"]["login"] == self.username:
				entry[SYMBOL_COMMITS] = contributor["total"]
				entry[SYMBOL_ADDITIONS] = additions
				entry[SYMBOL_DELETIONS] = deletions
				entry[SYMBOL_NET_ADDITIONS] = additions - deletions

		entry[SYMBOL_TOTAL_COMMITS] = totalCommits
		entry[SYMBOL_TOTAL_ADDITIONS] = totalAdditions
		entry[SYMBOL_TOTAL_DELETIONS] = totalDeletions
		entry[SYMBOL_REPO_LINES] = totalAdditions - totalDeletions
		
		if(entry.get(SYMBOL_COMMITS) != None):
			print(f"Fetching language data for {entry[SYMBOL_REPO_NAME]}")
			languages = get(f"/repos/{entry[SYMBOL_REPO_OWNER]}/{entry[SYMBOL_REPO_NAME]}/languages")
			entry[SYMBOL_LANGUAGES] = ", ".join(language for language in languages.keys())
			return entry
		print(f"{entry[SYMBOL_REPO_NAME]} contains no contributions by {self.username}, discarding...")
		return None

	def getRepos(self):
		if self.dataIsOld():
			print("Portfolio data is old, refetching...")
			self.fetchRepos()
			self.generateEntries()
			self.sortEntries(SYMBOL_ADDITIONS, reverse = True)
			self.save(self.filename)
		
		return self.entries

	def dataIsOld(self):
		return time.time() - self.lastFetched > REFETCH_TIMEOUT

	
def getFull(fullPath):
	if SECRET_GITHUB == None:
		raise NameError(f"No OAuth token env variable found, please set ${ENV_SECRET_GITHUB} (editable inside Portfolio.py) to your OAuth token.")
	return requests.get(fullPath, auth=(SECRET_GITHUB, "")).json()

def get(path):
	return getFull(f"{GITHUB_ENDPOINT}{path}")
