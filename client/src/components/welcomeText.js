import React, { Component } from 'react';
import '../../style/welcomeText.scss';

export class WelcomeText extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <div className="welcome-container">
                        <h1 className="welcome-text-main">Welcome to Konexio!</h1>
                        <h1 className="welcome-text-submain">Let's get you started.</h1>
                    </div>
                </div>
            </ React.Fragment>
        );
    }
};
