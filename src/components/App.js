import React from "react";
import ResizableDrag from "components/ResizableDrag";
import Sidebar from "components/Sidebar";
import Mainpage from "components/Mainpage";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions/index";
import "styles/main.scss";

const App = () => (
  <ResizableDrag>
    <Sidebar />
    <Mainpage />
  </ResizableDrag>
);

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  actions
)(App);
