import React from "react";
import {AuthorizationStatus, PagePath} from "../../constant";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Header = (props) => {
  const {authorizationStatus, user} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={PagePath.MAIN} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <span className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.AUTH ?
                    <Link className="header__user-name user__name" to={PagePath.FAVORITE}>
                      {user ? user.email : ``}
                    </Link>
                    : <Link className="header__login" to={PagePath.LOGIN}>Sign in</Link>}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  user: USER.user,
});

Header.propTypes = {
  authorizationStatus: PropTypes.string,
  login: PropTypes.string,
  user: PropTypes.shape({
    email: PropTypes.string,
  })
};
export {Header};
export default connect(mapStateToProps)(Header);
