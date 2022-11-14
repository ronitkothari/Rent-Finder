import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as action from "../../../store/actions/index";
import classes from "./NavBar.module.css";

import logo from '../../res/Subleteer logo Light.png';

const NavLinkStyle = {
  textDecoration: "none",
  color: "white",
  textAlign: "center",
  padding: "5px",
  margin: "2px 15px",
};

const NavBar = (props) => {
  let nav = (
    <React.Fragment>
      <NavLink to="/signup" style={NavLinkStyle}>
        <div>Sign Up</div>
      </NavLink>
      <NavLink to="/login" style={NavLinkStyle}>
        <div>Log In</div>
      </NavLink>
    </React.Fragment>
  );

  if (props.isAuthenticated) {
    nav = (
      // <div style={NavLinkStyle} onClick={props.logout}>
      <NavLink style={NavLinkStyle} to="/profile">
        Hello, {props.username}
      </NavLink>
      // </div>
    );
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.Logo}>
        <img src={logo} alt="Subleteer Logo"/>
      </div>
      <div className={`${classes.links} ${classes.Welcome}`}>{nav}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(action.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

