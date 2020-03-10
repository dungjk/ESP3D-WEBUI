import { h } from "preact"
import "../stylesheets/application.scss"
import { AlertTriangle } from "preact-feather"
import NavBar from "./nav-bar"
import Dashboard from "./dashboard"
import Settings from "./settings"
import Camera from "./camera"
import Login from "./login"
import {Mymessage} from "./http"
import Router from "preact-router"
import { useState, useEffect } from "preact/hooks"
import { IntlProvider, Text } from 'preact-i18n';
import langFr from './lang/fr.json';
import langEn from './lang/en.json';

export default () => {
    useEffect(() => {
    const devMode = process.env.NODE_ENV !== "production"
    var url = "/command?cmd=" + encodeURIComponent("[ESP800]")
    Mymessage(url)
    console.log("Init part development mode=" + devMode)
    fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(data);
      });
    },[]);
    const [lang, setlang] = useState(langFr)
    return (
    <IntlProvider definition={lang}>
        <NavBar />
        <br/>
        <br/>
        <br/>
        <div className="alert alert-warning"><AlertTriangle size={18} /><Text id="msg">More to come soon yes</Text></div>
        <div className="container-fluid">
          <Router>
            <Dashboard path="/" />
            <Settings path="/settings" />
            <Camera path="/camera" />
            <Login path="/login"/>
          </Router>
        </div>
        <button class="btn btn-dark" type="button" onClick={() => {setlang(langFr); console.log("Fr selected");}}>Fr</button>&nbsp;<button class="btn btn-dark" type="button" onClick={() => {setlang(langEn); console.log("En selected");}} >En</button>
     </IntlProvider>
    );
}
