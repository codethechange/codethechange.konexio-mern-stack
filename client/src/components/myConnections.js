// sign in, the my connections OR /public
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import CenterCard363 from "./centerCard363";
import Account from './account'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {tryConnect, getUserProfile, getUserMatches} from '../actions';
import profilePic from '../images/profile_pic.png';
import "../../style/myConnections.scss";

class MyConnections extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
    this.props.getUserMatches();
  }
  renderProfileCard(user) {
    return (
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
                {user.name.first} {user.name.last}
              </h3>
              <p class = "info-text">
                <strong>{user.course}</strong><br/>
                <strong>Email:</strong> {user.email}<br/>
                <strong>Phone Number:</strong> {user.phone.number}<br/>
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
    );
  }
  render() {
    const { status, profile, matches } = this.props;
    if (profile != null && matches != null) {
      console.log(profile);
      console.log(matches);
      let cards = [];
      for (let i = 0; i < matches.length; i++) {
          cards.push(<div key={i}>{this.renderProfileCard(matches[i])}</div>)
      }
      return (
        //<CenterCard363>
        <div class="container-fluid">{cards}</div>
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
      matches: user.matches,
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

export default withRouter(connect(mapStateToProps, {tryConnect, getUserProfile, getUserMatches})((MyConnections)));
