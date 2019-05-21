import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signUserUp } from "../../actions";
import CenterCard363 from "../centerCard363";
import "../../../style/signup.scss";
import "../../../style/bootstrapComponents.scss";

class SignupMentee extends Component {
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
                      name="phoneNumber"
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
                <label for="course">Konexio Course:</label>
                <br/>
                <Field name="course" component = "select" class="form-control-lg">
                  <option selected>Choose...</option>
                  <option value = "course1">Course 1</option>
                  <option value = "course2">Course 2</option>
                  <option value = "course3">Course 3</option>
                </Field>
              </div>

              <div className = "form-group">
              <label for="skills">What skills would you like to develop?</label><br/>
                <Field name="skills" id="computerLiteracy" component="input" type="checkbox"/>
                <label>Learning to Use a Computer</label>
                <br/>

                <Field name="skills" id="coding" component="input" type="checkbox"/>
                <label>Coding</label>
                <br/>

                <Field name="skills" id="education" component="input" type="checkbox"/>
                <label>Education</label>
                <br/>

                <Field name="skills" id="leadership" component="input" type="checkbox"/>
                <label>Leadership & Communication</label>
                <br/>

                <Field name="skills" id="personalDevelopment" component="input" type="checkbox"/>
                <label>Personal Development</label>
                <br/>

                <Field name="skills" id="other" component="input" type="checkbox"/>
                <label>Other</label>
                <br/>
              </div>

              <div>
                <label class="control-label col-md-8">
                  How would your rate your ability to use a computer?
                  </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons" className = "form-group">
                <label class="btn btn-secondary active">
                  <Field value = "1" type="radio" name="skillNumber" id="option1" autocomplete="off" component = "input" checked/> 1
                </label>
                <label class="btn btn-secondary">
                  <Field value = "2" type="radio" name="skillNumber" id="option2" autocomplete="off" component = "input"/> 2
                </label>
                <label class="btn btn-secondary">
                  <Field value = "3" type="radio" name="skillNumber" id="option3" autocomplete="off" component = "input"/> 3
                </label>
                <label class="btn btn-secondary">
                  <Field value = "4" type="radio" name="skillNumber" id="option4" autocomplete="off" component = "input"/> 4
                </label>
                <label class="btn btn-secondary">
                  <Field value = "5" type="radio" name="skillNumber" id="option5" autocomplete="off" component = "input"/> 5
                </label>
                <label class="btn btn-secondary">
                  <Field value = "6" type="radio" name="skillNumber" id="option6" autocomplete="off" component = "input"/> 6
                </label>
                <label class="btn btn-secondary">
                  <Field value = "7" type="radio" name="skillNumber" id="option7" autocomplete="off" component = "input"/> 7
                </label>
                <label class="btn btn-secondary">
                  <Field value = "8" type="radio" name="skillNumber" id="option8" autocomplete="off" component = "input"/> 8
                </label>
                <label class="btn btn-secondary">
                  <Field value = "9" type="radio" name="skillNumber" id="option9" autocomplete="off" component = "input"/> 9
                </label>
                <label class="btn btn-secondary">
                  <Field value = "10" type="radio" name="skillNumber" id="option10" autocomplete="off" component = "input"/> 10
                </label>
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

              <div class="form-group">
              <label for="asylumStatus">Asylum Status:</label>
                <div>
                  <Field
                    name="asylumStatus"
                    component="input"
                    type="radio"
                    value="asylumSeeker"/>
                    <label> Asylum Seeker</label>
                    <br/>

                  <Field
                    name="asylumStatus"
                    component="input"
                    type="radio"
                    value="refugee"/>
                    <label> Refugee</label>
                </div>
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
  })(SignupMentee)
);
