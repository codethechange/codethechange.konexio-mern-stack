import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signUserUp } from "../../actions";
import CenterCard363 from "../centerCard363";

class SignupMentor extends Component {
  renderAlert(error) {
    let errorMsg = error || this.props.errorMsg;
    if (this.props.errorMsg) {
      return (
        <div className="alert alert-warning">
          <strong>Oops!</strong> {errorMsg}
        </div>
      );
    }
  }
  handleFormSubmit(data) {
    if (data.password == data.password2) {
      this.props.signUserUp(data);
    } else {
      this.renderAlert("password does not matched");
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <CenterCard363>
        <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <div class="form-row">
                <div class="col">
                  <div className="form-group">
                    <label>First Name:</label>
                    <Field
                      name="firstName"
                      type="text"
                      component="input"
                      className="form-control form-control-lg"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <div className="form-group">
                    <label>Last Name:</label>
                    <Field
                      name="lastName"
                      type="text"
                      component="input"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="col-lg-8">
                  <div className="form-group">
                    <label>Email:</label>
                    <Field
                      name="email"
                      type="email"
                      component="input"
                      className="form-control form-control-lg"
                      placeholder="sample@email.com"
                      required
                    />
                  </div>
                </div>
                <div class="col">
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
                </div>
              </div>

              <div class="form-row">
                <div class="col">
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
                </div>
                <div class="col">
                  <div className="form-group">
                    <label for="gender">Gender:</label>
                    <select class="form-control form-control-lg" id="gender">
                      <option selected>Choose...</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
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
                  What skills in a mentee do you seek/are you willing to help
                  develop?
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
              <div className="form-group">
                <label>Password:</label>
                <Field
                  type="password"
                  name="password"
                  component="input"
                  className="form-control form-control-lg"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <Field
                  type="password"
                  name="password2"
                  component="input"
                  className="form-control form-control-lg"
                  placeholder="Your Password Again"
                  required
                />
              </div>
              {this.renderAlert()}
              <div style={{ paddingTop: "30px" }}>
                <button
                  type="submit"
                  className="btn btn-lg btn-light btn-block"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </CenterCard363>
    );
  }
}

function validate(formProps) {
  const errors = {};
  if (formProps.password !== formProps.password2) {
    errors.password = "Password must match";
  }
  return errors;
}

function mapStateToProps({ auth }) {
  return {
    errorMsg: auth.error
  };
}

export default connect(
  mapStateToProps,
  { signUserUp }
)(
  reduxForm({
    form: "signup",
    validate
  })(SignupMentor)
);
