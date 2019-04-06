import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WelcomeButton } from './welcomeButton';
import { WelcomeText } from './welcomeText';
import welcome from '../images/welcome.png';
import '../../style/home.scss';
export default class App extends Component {

  render () {
      return (
        <React.Fragment>
            <WelcomeText/>
            <div>
                <img src={welcome} className="resize" />
            </div>
            <WelcomeButton />
        </React.Fragment>
      )
   }
}
