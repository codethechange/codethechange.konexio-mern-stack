import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    renderSignButton(){
        if (this.props.authenticated){
            return (
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signout">Sign out</NavLink>
                </li>
            )
        }else{
            return (
                [
                    <li className="nav-item" key="1">
                        <NavLink to="/signin" className="nav-link">Sign in</NavLink>
                    </li>,
                    <li className="nav-item" key="2">
                        <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
                    </li>
                ]
            )
        }
    }
    render() {
        if(this.props.authenticated){
            return (
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Konexio</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/myConnections">My Connections</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">Account</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {this.renderSignButton()}
                        </ul>
                    </div>
                </nav>
            )
        } else{
            return(
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Konexio</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/account">Account</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            {this.renderSignButton()}
                        </ul>
                    </div>
                </nav>
            )
        }
        
    }
}

function mapStateToProps({auth}){
    return {
        authenticated: auth.authenticated
    }
}

export default connect(mapStateToProps, actions)(Header)