import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { tryConnect, getUserProfile, updateUserProfile } from "../actions";
import CenterCard363 from "./centerCard363";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      editting: false
    };
  }
  componentWillMount() {
    this.props.tryConnect();
    this.props.getUserProfile();
  }
  render() {
    let { status, profile } = this.props;
    return (
      <CenterCard363>
        <div className="card border-secondary">
          <h4 className="card-header">Account</h4>
          <div className="card-body">
            <p className="text-muted">Server status: {status} ☀</p>
            {profile && this.renderProfileForm()}
          </div>
        </div>
      </CenterCard363>
    );
  }
  handleFormSubmit(d) {
    this.props.updateUserProfile(d);
  }
  switchEditting() {
    this.setState({ editting: !this.state.editting });
  }
  cancelForm() {
    this.switchEditting();
    this.props.reset();
  }
  renderButtons() {
    const { submitting, dirty } = this.props;
    if (this.state.editting) {
      return (
        <div className="form-group">
          <button
            disabled={!dirty}
            type="submit"
            className="btn-lg btn btn-light btn-block"
          >
            Save Change
          </button>
          <button
            disabled={submitting}
            className="btn-lg btn btn-secondary btn-block"
            onClick={this.cancelForm.bind(this)}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="btn btn-light btn-lg btn-block"
          onClick={this.switchEditting.bind(this)}
        >
          Update Information
        </button>
      );
    }
  }
  renderProfileForm() {
    const { editting } = this.state;
    const { handleSubmit, dirty, updateProfileFailMsg } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="form-group">
          <label>First Name:</label>
          <Field
            disabled={!editting}
            type="text"
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
            type="text"
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
            type="email"
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
            name="phone"
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
          <select class="form-control form-control-lg" id="gender">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Languages Spoken:</label>
          <Field
            name="languages"
            type="text"
            component="input"
            className="form-control form-control-lg"
            placeholder="Languages"
            required
          />
        </div>

        <div className="form-group">
          <label>Name of Organization:</label>
          <Field
            name="org"
            type="text"
            component="input"
            className="form-control form-control-lg"
            placeholder="Name of Organization"
            required
          />
        </div>

        <div>
          <label>
            What skills in a mentee do you seek/are you willing to help develop?
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Computer Literacy
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Coding
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Education
          </label>
        </div>

        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Leadership & Communication
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Personal Development
          </label>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="" /> Other
          </label>
        </div>

        <div class="form-group">
          <label class="control-label col-md-8">
            Are you comfortable using a computer on your own?
          </label>
          <div class="col-md-2">
            <label class="radio-inline control-label">
              <input
                checked="checked"
                id="usingComputerYes"
                name="usingComputer"
                type="radio"
                value="yes"
              />{" "}
              Yes
            </label>
            <label class="radio-inline control-label">
              <input
                id="usingComputerNo"
                name="usingComputer"
                type="radio"
                value="no"
              />{" "}
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="country">Country of Origin:</label>
          <select class="form-control form-control-lg" id="country">
            <option>France</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Create Username:</label>
          <Field
            name="username"
            type="text"
            component="input"
            className="form-control form-control-lg"
            placeholder="Username"
            required
          />
        </div>

        {dirty && (
          <div className="form-group">
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              component="input"
              className={
                updateProfileFailMsg
                  ? "form-control form-control-lg is-invalid"
                  : "form-control form-control-lg"
              }
              placeholder="your password"
              required
            />
            {updateProfileFailMsg && (
              <div className="invalid-feedback">{updateProfileFailMsg}</div>
            )}
          </div>
        )}
        <div style={{ paddingTop: "30px" }}>{this.renderButtons()}</div>
      </form>
    );
  }
}

function mapStateToProps({ auth, user }) {
  return user.profile
    ? {
        status: auth.status,
        profile: user.profile,
        initialValues: {
          email: user.profile.email,
          firstName: user.profile.name.first,
          lastName: user.profile.name.last,
          Phone Number
          age
          gender
          Languages Spoken
          name of Organization
          
        },
        updateProfileFailMsg: user.updateProfileFailMsg
      }
    : {
        status: auth.status,
        profile: user.profile
      };
}

export default connect(
  mapStateToProps,
  { tryConnect, getUserProfile, updateUserProfile }
)(
  reduxForm({
    form: "profileUpdate"
  })(Account)
);
