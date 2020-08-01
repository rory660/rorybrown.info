/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from "react";
import "./splash.css";

export default class Splash extends Component {
	state = {
		x: 0,
	};

	test() {
		this.state.x++;
		return this.state.x;
	}

	render() {
		return (
			<div class="splash">
				<div class="splashBackground"></div>
				<div class="splashContents">
					<h1>Hi, I'm Rory Brown</h1>
					<h2>I'm a software engineer.</h2>
					<div class="splashButtons">
						<div class="splashButton">
							<img src="/img/devIcon.png" alt="" />
							<p>I want to hire a software engineer</p>
						</div>
						<div class="splashButton">
							<img src="/img/tutorIcon.png" alt="" />
							<p>I'm looking for a computer science tutor</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
