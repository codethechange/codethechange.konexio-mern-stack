import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {tryConnect, getUserProfile, updateUserProfile} from '../actions';
import CenterCard363 from './centerCard363';

class Account extends Component {
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
    let {status, profile} = this.props;
    return (
      <CenterCard363>
        <div className='card border-secondary'>
        <h4 className="card-header">
          Account
        </h4>
        <div className='card-body'>
        <p className="text-muted">Server status: {status} ☀</p>
          {profile && this.renderProfileForm()}
        </div>
        </div>
      </CenterCard363>
    );
  }
  handleFormSubmit(d){
    this.props.updateUserProfile(d)
  }
  switchEditting() {
    this.setState({editting: !this.state.editting})
  }
  cancelForm(){
    this.switchEditting();
    this.props.reset();
  }
  renderButtons() {
    const {submitting, dirty} = this.props;
    if(this.state.editting){
      return (<div className="form-group">
        <button disabled={!dirty} type="submit" className="btn-lg btn btn-light btn-block">Save Change</button>
        <button disabled={submitting} className="btn-lg btn btn-secondary btn-block" onClick={this.cancelForm.bind(this)}>Cancel</button>
      </div>)
    }else{
      return (<button className="btn btn-light btn-lg btn-block" onClick={this.switchEditting.bind(this)}>Update Information</button>)
    }
  }
  renderProfileForm(){
    const {editting} = this.state;
    const {handleSubmit, dirty, updateProfileFailMsg} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>First Name:</label>
          <Field
            disabled={!editting}
            type= 'text'
            name="firstName"
            component="input"
            className="form-control form-control-lg"
            placeholder="First Name"
            required
            />
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <Field
          disabled={!editting}
          type= 'text'
          name="lastName"
          component="input"
          className="form-control form-control-lg"
          placeholder="Last Name"
          required
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <Field
            disabled
            readOnly
            type= 'email'
            name="email"
            component="input"
            className="form-control form-control-lg"
            placeholder="sample@email.com"
            required
            />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <Field
            disabled
            readOnly
            name="phoneNumber"
            type="tel"
            component="input"
            className="form-control form-control-lg"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="XXX-XXX-XXXX"
            required
            />
       </div>

       <div className="form-group">
         <label>Age:</label>
         <Field
           disabled
           readOnly
           name="age"
           type="text"
           component="input"
           className="form-control form-control-lg"
           placeholder="Age"
           required
         />
       </div>

       <div className="form-group">
         <label for="gender">Gender:</label>
         <select 
           className="form-control form-control-lg" id="gender"
           name="gender">
           <option selected>Choose...</option>
           <option>Male</option>
           <option>Female</option>
           <option>Other</option>
         </select>
       </div>

      {dirty && <div className="form-group">
        <label>Password:</label>
        <Field
          type= 'password'
          name="password"
          component="input"
          className={(updateProfileFailMsg)?"form-control form-control-lg is-invalid":"form-control form-control-lg"}
          placeholder="your password"
          required
        />
        {(updateProfileFailMsg) && <div className="invalid-feedback">
          {updateProfileFailMsg}
        </div>}
      </div>}
      <div style={{'paddingTop': '30px'}}>
        {this.renderButtons()}
      </div>
    </form>);
  }
}

function mapStateToProps({auth, user}) {
  return user.profile?{
      status: auth.status,
      profile: user.profile,
      initialValues: {
        email: user.profile.email,
        firstName: user.profile.name.first,
        lastName: user.profile.name.last,
        phoneNumber: user.profile.phone.number,
        age: user.profile.age,
        gender: user.profile.gender,
        languages: user.profile.languages,
        course: user.profile.course,
        skill1: user.profile.skills.computerLiteracy,
        skill2: user.profile.skills.coding,
        skill3: user.profile.skills.education,
        skill4: user.profile.skills.leadership,
        skill5: user.profile.skills.personalDevelopment,
        countryOfOrigin: user.profile.countryOfOrigin,
        asylumStatus: user.profile.asylumStatus
      },
      updateProfileFailMsg: user.updateProfileFailMsg
  }:{
    status: auth.status,
    profile: user.profile
  }
}


export default connect(mapStateToProps, {tryConnect, getUserProfile, updateUserProfile})(reduxForm({
  form: 'profileUpdate',
})(Account));
