import { h } from "preact"
import "../stylesheets/application.scss"
import { AlertTriangle } from "preact-feather"
import NavBar from "./nav-bar"
import Dashboard from "./dashboard"
import Settings from "./settings"
import Camera from "./camera"
import Login from "./login"
import Router from "preact-router"
import { useState, useEffect } from "preact/hooks"

export default () => {
    useEffect(() => {
    const devMode = process.env.NODE_ENV !== "production"
    var url = "/command?plain=" + encodeURIComponent("[ESP800]")
    console.log(url)
    console.log("Init part development mode=" + devMode)
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
    },[]);
    return (
    <div>
        <NavBar />
        <br/>
        <br/>
        <br/>
        <div className="alert alert-warning"><AlertTriangle size={18} />More to come soon</div>
        <div className="container-fluid">
          <Router>
            <Dashboard path="/" />
            <Settings path="/settings" />
            <Camera path="/camera" />
            <Login path="/login"/>
          </Router>
        </div>
    </div>
    );
}
