/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from "react";
import "./about.css"

export default class About extends Component {

	
	render() {
		return (
			<div id="about">
                <div id="aboutContents" class={this.props.activeIndex == 0 ? "" : "toggled"}>
                    <div id="aboutLeft" class="aboutInfo">
                        <h2 class="aboutHeading">Rory Brown</h2>
                        <h3 class="aboutTagline">Experienced Computer Science Tutor</h3>
                    </div>
                    <img src="/img/headshot.png" alt=""/>
                    <div id="aboutRight" class="aboutInfo">  
                        <h2 class="aboutHeading">Rory Brown</h2>
                        <h3 class="aboutTagline">Full Stack Web Developer</h3>
                    </div>
                </div>
                
            </div>
		);
	}
}
