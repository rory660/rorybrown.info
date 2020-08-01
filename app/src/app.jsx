/*jshint esversion: 9 */
/*jshint asi: true*/

import React, { Component } from 'react';

import Splash from "./components/splash.jsx"
import "./master.css"

export default class App extends Component {
    state = {  }
    render() { 
        return (
            <div class="app">
                <Splash></Splash>
            </div>
        )
    }
}