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
                    <select
                      className="form-control form-control-lg" id="gender"
                      name="gender">
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

              <div>
                <label class="control-label col-md-8">
                  How would your rate your ability to use a computer?
                </label>
              </div>
              <div class="btn-group btn-group-toggle" data-toggle="buttons" className="form-group">
                <label class="btn btn-secondary active">
                  <Field value="1" type="radio" name="computerSkill" id="1" autocomplete="off" component = "input"
                  parse={Number}/> 1
                </label>
                <label class="btn btn-secondary">
                  <Field value="2" type="radio" name="computerSkill" id="2" autocomplete="off" component = "input"
                  parse={Number}/> 2
                </label>
                <label class="btn btn-secondary">
                  <Field value="3" type="radio" name="computerSkill" id="3" autocomplete="off" component = "input"
                  parse={Number}/> 3
                </label>
                <label class="btn btn-secondary">
                  <Field value="4" type="radio" name="computerSkill" id="4" autocomplete="off" component = "input"
                  parse={Number}/> 4
                </label>
                <label class="btn btn-secondary">
                  <Field value="5" type="radio" name="computerSkill" id="5" autocomplete="off" component = "input"
                  parse={Number}/> 5
                </label>
                <label class="btn btn-secondary">
                  <Field value="6" type="radio" name="computerSkill" id="6" autocomplete="off" component = "input"
                  parse={Number}/> 6
                </label>
                <label class="btn btn-secondary">
                  <Field value="7" type="radio" name="computerSkill" id="7" autocomplete="off" component = "input"
                  parse={Number}/> 7
                </label>
                <label class="btn btn-secondary">
                  <Field value="8" type="radio" name="computerSkill" id="8" autocomplete="off" component = "input"
                  parse={Number}/> 8
                </label>
                <label class="btn btn-secondary">
                  <Field value="9" type="radio" name="computerSkill" id="9" autocomplete="off" component = "input"
                  parse={Number}/> 9
                </label>
                <label class="btn btn-secondary">
                  <Field value="10" type="radio" name="computerSkill" id="10" autocomplete="off" component = "input"
                  parse={Number}/> 10
                </label>
              </div>

              <div className="form-group">
                <label for="country">Country of Origin:</label>
                <select class="form-control form-control-lg" id="country">
                  <option>France</option>
                  <option>Other</option>
                </select>
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
