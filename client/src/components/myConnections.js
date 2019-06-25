// sign in, the my connections OR /public
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CenterCard363 from "./centerCard363";
import Account from './account'
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {tryConnect, getUserProfile} from '../actions';
import profilePic from '../images/profile_pic.png';
import "../../style/myConnections.scss";

class MyConnections extends Component {
  constructor(){
    super();
    this.state = {
      editting: false
    }
  }
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
  }
  render() {
    const { status, profile } = this.props;
    if (profile != null) {
      console.log(profile)
      return (
        //<CenterCard363>
        <div class="container-fluid">
        	<div class="row">
            <div class="col-md-2">
            </div>
        		<div class="col-md-8">
        			<div class="jumbotron">
        				<h2 class = "jumbo-header">
        					Welcome!
        				</h2>
        				<p class = "lg-text">
        					Meet your mentor or mentee here.
        				</p>
        			</div>
              <div class="col-md-2">
              </div>
        			<div class="row top-buffer">
        				<div class="col-md-6">
        					<img alt="Profile Picture" src={profilePic} className="resize" />
        				</div>
        				<div class="col-md-6 top-buffer">
        					<h3 class = "lg-text-blue">
                    {profile.name.first} {profile.name.last}
        					</h3>
        					<p class = "info-text">
        						<strong>{profile.course}</strong><br/>
                    <strong>Email:</strong> {profile.email}<br/>
                    <strong>Phone Number:</strong> {profile.phone.number}<br/>
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
    } else {
      return null
    }
  }
}

function mapStateToProps({user,auth}) {
  return user.profile?{
      status: auth.status,
      profile: user.profile,
      initialValues: {
        email: user.profile.email,
        firstName: user.profile.name.first,
        lastName: user.profile.name.last,
        phoneNumber: user.profile.phone.number,
        isMentee: user.profile.isMentee,
        age: user.profile.age,
        gender: user.profile.gender,
        english: user.profile.languages.english,
        french: user.profile.languages.french,
        other: user.profile.languages.other,
        course: user.profile.course,
        skill1: user.profile.skills.computerLiteracy,
        skill2: user.profile.skills.coding,
        skill3: user.profile.skills.education,
        skill4: user.profile.skills.leadership,
        skill5: user.profile.skills.personalDevelopment,
        //computerSkill: user.profile.computerSkill,
        countryOfOrigin: user.profile.countryOfOrigin,
        usersMatched: user.profile.usersMatched
      },
      updateProfileFailMsg: user.updateProfileFailMsg
  }:{
    status: auth.status,
    profile: user.profile
  }
}

export default connect(mapStateToProps, {tryConnect, getUserProfile})((MyConnections));
