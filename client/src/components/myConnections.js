// sign in, the my connections OR /public
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CenterCard363 from "./centerCard363";
import profile from '../images/profile_pic.png';
import "../../style/myConnections.scss";

class MyConnections extends Component {
  render() {
    return (
      //<CenterCard363>
      <div class="container-fluid">
      	<div class="row">
          <div class="col-md-2">
          </div>
      		<div class="col-md-8">
      			<div class="jumbotron">
      				<h2 class = "jumbo-header">
      					Welcome
      				</h2>
      				<p class = "lg-text">
      					Meet your mentor here.
      				</p>
      			</div>
            <div class="col-md-2">
            </div>
      			<div class="row top-buffer">
      				<div class="col-md-6">
      					<img alt="Profile Picture" src={profile} className="resize" />
      				</div>
      				<div class="col-md-6 top-buffer">
      					<h3 class = "lg-text-blue">
      						FirstName LastName
      					</h3>
      					<p class = "info-text">
      						<strong>Company Name</strong><br/>
                  <strong>Email:</strong> email@example<br/>
                  <strong>Phone Number:</strong> XXX-XXX-XXXX<br/>
      					</p>
      				</div>
      			</div>
      			<div class="row top-buffer">
              <div class="col-md-1">
              </div>
      				<div class="col-md-3">
      					<button type="button" class="btn btn-blue btn-block btn-lg">
      						Learn More
      					</button>
      				</div>
              <div class="col-md-3">
              </div>
      				<div class="col-md-3">
      					<button type="button" class="btn btn-blue btn-block btn-lg">
      						Contact Now
      					</button>
      				</div>
              <div class="col-md-1">
              </div>
      			</div>
      		</div>
      	</div>
      </div>
      //</CenterCard363>
    );
  }
}

export default MyConnections;
