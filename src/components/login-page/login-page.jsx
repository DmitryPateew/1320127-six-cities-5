import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import {PagePath, AuthorizationStatus} from "../../constant";
import {Redirect} from "react-router-dom";

class LoginPage extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.login({login: this.loginRef.current.value, password: this.passwordRef.current.value});
  }

  render() {
    const {authorizationStatus} = this.props;
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (<Redirect to={PagePath.MAIN}/>);
    } else {
      return (<div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to={PagePath.MAIN} className="header__logo-link">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input ref={this.loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required={true}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input ref={this.passwordRef} className="login__input form__input" type="password" min={3} name="password" placeholder="Password" required={true}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Paris</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>);
    }

  }
}

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,

});

const mapDispatchToProps = (dispatch) => bindActionCreators({login}, dispatch);

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
};

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
