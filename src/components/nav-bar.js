import { h } from "preact"
import { useState, useEffect, useContext } from "preact/hooks"
import { Link } from "preact-router/match"
import { Video, Github, Settings, User, Server } from "preact-feather"
import { Text } from 'preact-i18n';
import {Theme} from './theme'

const NavItem = ({icon: Icon, linkTo, text}) => (
    <Link className="nav-link" href={linkTo}>
      <Icon size={24} />
      {text}
    </Link>
)

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [showit, setshow] = useState(false)
  const theme = useContext(Theme)
  return(
   <div>
    <header class="header">
        <h1>ESP3D</h1>
        <version><a href="https://github.com/luc-github/esp3d-webui" target="_blank" ><Github/>v3.0</a></version>
        <nav>
        <Link className="nav-link" href="/" id="dash" ><Server size={24}/> <Text id="dash">Dashboard</Text>:{theme}</Link>
          <NavItem linkTo="/camera" text="Camera" icon={Video}/>
          <Link className="nav-link" href="/settings" ><Settings size={24}/> <Text id="settings">Settings</Text></Link>
          <Link className="nav-link" href="/login"  className={showit?"nav-link visible":"nav-link invisible"} ><User size={24}/> Login</Link>
          <Link className="nav-link" onClick={() => {setshow(!showit); console.log("click");document.getElementById("dash").click();}}><button class="btn btn-dark" type="button">{showit?"hide":"show"}</button></Link>
        </nav>
    </header>
    </div>
  )
}
