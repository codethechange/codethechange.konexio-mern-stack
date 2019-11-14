import React, { Component } from "react";
import { reduxForm, change, Field } from "redux-form";
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
    this.props.change('isMentee', false);
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
                      name="phoneNumber"
                      type="tel"
                      component="input"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
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
                    <br/>
                    <Field name="gender" component = "select" class="form-control-lg">
                      <option selected>Choose...</option>
                      <option value = "male">Male</option>
                      <option value = "female">Female</option>
                      <option value = "other">Other</option>
                    </Field>
                  </div>
                </div>
              </div>

              <div className = "form-group">
              <label for="languages">Languages:</label><br/>
                <Field name="english" id="english" component="input" type="checkbox"/>
                <label>English</label>
                <br/>

                <Field name="french" id="french" component="input" type="checkbox"/>
                <label>French</label>
                <br/>

                <Field name="other" id="other" component="input" type="checkbox"/>
                <label>Other</label>
                <Field name="other-text" id="other-text" component="input" className="col-sm-2 form-control" type="text"/>
                <br/>
              </div>

              <div className="form-group">
                <label>Name of Organization:</label>
                <Field
                  name="course"
                  type="text"
                  component="input"
                  className="form-control form-control-lg"
                  placeholder="Name of Organization"
                  required
                />
              </div>

              <div className = "form-group">
              <label for="skills">What skills would you like to help others develop?</label><br/>
                <Field name="skill1" id="computerLiteracy" component="input" type="checkbox"/>
                <label>Learning to Use a Computer</label>
                <br/>

                <Field name="skill2" id="coding" component="input" type="checkbox"/>
                <label>Coding</label>
                <br/>

                <Field name="skill3" id="education" component="input" type="checkbox"/>
                <label>Education</label>
                <br/>

                <Field name="skill4" id="leadership" component="input" type="checkbox"/>
                <label>Leadership & Communication</label>
                <br/>

                <Field name="skill5" id="personalDevelopment" component="input" type="checkbox"/>
                <label>Personal Development</label>
                <br/>
              </div>

              <div className="form-group">
                <label for="countryOfOrigin">Country of Origin:</label>
                <br/>
                <Field name="countryOfOrigin" component = "select" class="form-control-lg">
                  <option selected>Choose...</option>
                  <option value = "france">France</option>
                  <option value = "other">Other</option>
                </Field>
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
