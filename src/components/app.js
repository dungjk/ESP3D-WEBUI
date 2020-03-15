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
import { useState, useEffect, useContext, useReducer,useMemo,useRef } from "preact/hooks"
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
            //to simulate a long time of fetching
            let i=0
            while (i < 2000000000)i++
            //end of delay
            return {
                loading: false,
                data : action.payload,
                error: '' 
            }
    case 'FETCH_FW_ERROR':
            return {
                loading: false,
                data : {},
                error: 'Error fetching data' 
            }
    default: 
        return state
    }
}


function FocusInput(){
    const inputRef = useRef(null)
    useEffect(()=>{
        console.log('Focus')
        inputRef.current && inputRef.current.focus()
        },
    [])
    return(
    <div>
    <input ref={inputRef} type='text'/>
    </div>
    )
}

const FW = ({State}) => {
    console.log('render fetch')
    if (State.error) {
        return ('Error fetching data');
    }
    if (State.loading) {
        return (
         <modal tabindex="-1" role="dialog" className={State.loading?"modal d-block":"modal d-none"}>
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
        <center>Loading...</center>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
    </modal>
        
        );
    }
    let property
    let dataarray = []
    for(property in State.data){
        let id = property
        dataarray.push({id : property, value : State.data[property]})
        console.log (property + " : " + State.data[property])
    }
    return (
    <ul>
        {dataarray.map(dataitem =>(<li>{dataitem.id} : {dataitem.value} </li>) )}
    </ul>
)
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
      response.json().then(function(data) {
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
    <div>
    <div>
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
     </Theme.Provider>
     </div>
     <FocusInput/>
     <div>
      {useMemo(
          () => (
            <FW State={state} />
          ),
          [state],
        )}
     </div>
    </div>
    );
}

