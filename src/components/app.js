import { h, createContext } from "preact"
import "../stylesheets/application.scss"
import { AlertTriangle } from "preact-feather"
import NavBar from "./nav-bar"
import Dashboard from "./dashboard"
import Settings from "./settings"
import Camera from "./camera"
import Login from "./login"
import {Mymessage} from "./http"
import Router from "preact-router"
import { useState, useEffect, useContext, useReducer } from "preact/hooks"
import { IntlProvider, Text } from 'preact-i18n';
import langFr from './lang/fr.json';
import langEn from './lang/en.json';
import {Theme} from './theme'

function DisplayTheme() {
  const theme = useContext(Theme);
  return <p>Active theme: {theme}</p>;
}

const initialState = {
    loading : true,
    error : '',
    data : ''
}

const reducer = (state, action) =>{
    switch (action.type) {
     case 'FETCH_FW_SUCCESS':
            return {
                loading: false,
                data : action.payload,
                error: '' 
            }
    case 'FETCH_FW_ERROR':
            return {
                loading: false,
                data : '',
                error: 'Error fetching data' 
            }
    default: 
        return state
    }
}

export function App() {
    const [lang, setlang] = useState(langFr)
    const [txt, setTxt] = useState('blue')
    const [state, dispatch] =  useReducer(reducer, initialState)
    
    useEffect(() => {
    const devMode = process.env.NODE_ENV !== "production"
    var url = "/command?cmd=" + encodeURIComponent("[ESP800]")
    Mymessage(url)
    console.log("Init part development mode=" + devMode)
    fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        dispatch({type:'FETCH_FW_ERROR'})
        return;
      }
      // Examine the text in the response
      response.text().then(function(data) {
        console.log(data);
        dispatch({type:'FETCH_FW_SUCCESS', payload: data})
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
    dispatch({type:'FETCH_FW_ERROR'})
  });
    },[]);
    
    return (
    <Theme.Provider value={txt}>
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
        <button class="btn btn-primary" type="button" onClick={() => {setlang(langFr); setTxt('blue'); console.log("Fr selected");}}>Fr</button>&nbsp;<button class="btn btn-dark" type="button" onClick={() => {setlang(langEn); setTxt('black'); console.log("En selected");}} >En</button>
     </IntlProvider>
       <DisplayTheme />
     <div>
     {state.loading? 'loading' : state.data}
     {state.error ? state.error:null}
     </div>
     </Theme.Provider>
     
    );
}

