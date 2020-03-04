import { h } from "preact"
import { useState, useEffect } from "preact/hooks"
import { Link } from "preact-router/match"
import { Video, Github, Settings, User, Server } from "preact-feather"


export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const [showit, setshow] = useState(false)
  return(
   <div>

    <header class="header">
       
        <h1>ESP3D</h1>
        <version><a href="https://github.com/luc-github/esp3d-webui" target="_blank" ><Github/>v3.0</a></version>
        <nav>
          <Link href="/"><Server size={24}/> Dashboard</Link>
          <Link href="/camera"><Video size={24}/> Camera</Link>
          <Link href="/settings"><Settings/> Settings</Link>
          <Link href="/login"  className={showit?"visible":"invisible"} ><User/> Login</Link>
          <Link onClick={() => setshow(!showit)}><button class="btn btn-dark" type="button">{showit?"hide":"show"}</button></Link>
        </nav>
        
    </header>
    </div>
  )
}
