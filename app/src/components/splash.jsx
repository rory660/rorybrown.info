/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from "react";
import "./splash.css";

export default class Splash extends Component {

	render() {
		return (
			<div className="splash">
				<div className="splashBackground"></div>
				<div className="splashContents">
					<h1>Hi, I'm Rory Brown</h1>
					<h2>I'm a software engineer.</h2>
					<div className="splashButtons">
						<div className="splashButton" onClick={this.props.onClickDev}>
							<img src="/img/devIcon.png" alt="" />
							<p>I want to hire a software engineer</p>
						</div>
						<div className="splashButton" onClick={this.props.onClickTutor}>
							<img src="/img/tutorIcon.png" alt="" />
							<p>I'm looking for a computer science tutor</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
