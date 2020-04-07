import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const member = Object.assign({}, this.state);
    this.props.processForm(member);
    <Redirect to="/" />
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    const { errors } = this.props;
    const errorsLis = errors.map((err, i) => (
      <li key={`err-${i}`}>{err}</li>
    ));

    return(
      <ul className="form-errors">{errorsLis}</ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>Sign In to Pickle</h1>
        {this.renderErrors()}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label className="session-form-label">
            Email
            <input
              type="text"
              onChange={this.update('email')}
              value={this.state.email}
              className="session-form-input" />
          </label>

          <label className="session-form-label">
            Password
            <input
              type="password"
              onChange={this.update('password')}
              value={this.state.password}
              className="session-form-input" />
          </label>

          <button className="session-form-submit" type="submit">Sign In</button>
        </form>
        <p>Don't have a Pickle account? <Link to="/signup">Sign up now.</Link></p>
      </div>
    );
  }
}

export default SignInForm;