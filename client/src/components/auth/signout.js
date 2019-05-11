import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import CenterCard363 from "../centerCard363";
import "../../../style/bootstrapComponents.scss";
import "../../../style/signout.scss";

class Signout extends Component {
    componentWillMount() {
        this.props.signUserOut()
    }
    render() {
        return (
          //<CenterCard363>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-8">
                <div class="jumbotron jumbotron-signout">
                  <h2 class = "jumbo-header">
                    Thanks for visiting!
                  </h2>
                  <p class = "lg-text">
                    You are now signed out.
                  </p>
                </div>
                <div class="col-md-2">
                </div>
              </div>
            </div>
            <div class="row justify-content-md-center">
                <Link to="/">
      					  <button type="button" class="btn btn-blue btn-block btn-lg signOutBtn">
      						  Home
      					  </button>
                </Link>
            </div>
      			<div class="row justify-content-md-center">
               <Link to="/signin">
      					<button type="button" class="btn btn-blue btn-block btn-lg signOutBtn">
                  Log In
      					</button>
              </Link>
      		 </div>
      		</div>
          //</CenterCard363>
        );
    }
}

export default connect(null, actions)(Signout)
