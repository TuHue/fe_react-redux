import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { connect } from 'react-redux';


function App(props) {

  return (
    <div className="App">
      <div>Current Expirence: {props.number}</div>
      <button className="btn btn-primary" onClick={props.onExperienceUp}>
        UP
      </button>
      <button className="btn btn-danger" onClick={props.onExperienceDown}>
        Down
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    number: state.number,
  };
}

function mapDispatchToProps(dispatch) {
  return{
    onExperienceUp: () => dispatch({type: 'EXPERIENCE_UP'}),
    onExperienceDown: () => dispatch({type: 'EXPERIENCE_DOWN'}),
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
