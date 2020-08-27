/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from "react";
import "./tab.css"

export default class Tab extends Component {

	
	render() {

		const classes = `tab ${this.props.active ? "" : "closedTab"}`
		return (
			<div id={this.props.id} className={classes}>
				<div className="tabBookmark" onClick={this.props.clickListener}>
					<img className="tabIcon" src={this.props.iconSrc} alt="" />
				</div>
				<div className="tabContents">
					<h2 className="tabHeading">{this.props.heading}</h2>
					{this.props.children}
				</div>
			</div>
		);
	}
}
