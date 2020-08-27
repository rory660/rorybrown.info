/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from 'react';

import Splash from "./components/splash.jsx"
import About from "./components/about.jsx"
import Tabs from "./components/tabs.jsx"
import "./master.css"

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {activeTab : 1}
    }

    showDevTab = () => {
        console.log("Showing dev tab")
        this.setState({activeTab : 1})
    }

    showTutorTab = () => {
        console.log("Showing tutoring tab")
        console.log(this.getTabs())
        this.setState({activeTab : 0})
    }

    getTabs = () => this.props.children

    render() { 
        console.log(this.state.activeTab)
        return (
            <div className="app">
                <Splash onClickDev={this.showDevTab} onClickTutor={this.showTutorTab}></Splash>
                <div id="background">
                    <div id="page">
                        <About activeIndex={this.state.activeTab}></About>
                        <Tabs activeIndex={this.state.activeTab} clickListeners={[this.showDevTab, this.showTutorTab]}>
                            <div id="tutoringSection">Tutoring</div>
                            <div id="programmingSection">Programming</div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}