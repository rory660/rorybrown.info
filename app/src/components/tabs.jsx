/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from "react";
import Tab from "./tab.jsx";
import "./tab.css";

const tabIds = ["tutoringTab", "programmingTab"]
const tabIconSrcs = ["/img/tutorIcon.png", "/img/devIcon.png"]
const tabheadings = ["Experienced Computer Science Tutor", "Full Stack Web Developer"]
export default class Tabs extends Component {

	render() {
    return <div className="tabs">
                {this.props.children.map((child, i) => {
                    const active = i === this.props.activeIndex
                    const clickListener = this.props.clickListeners[i]
                    return <Tab key={i} id={tabIds[i]} iconSrc={tabIconSrcs[i]} heading={tabheadings[i]} active={active} clickListener={clickListener}>{child}</Tab>
                })}
            </div>;
	}
}
