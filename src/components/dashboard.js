import { h } from "preact"
import {Theme} from "./theme"
import { useContext } from 'preact/hooks';

function DisplayTheme() {
  const theme = useContext(Theme);
  return <p>Active theme: {theme}</p>;
}

export default () => {
    const theme = useContext(Theme);
    return(
  <div>
   Dashboard : 
  {theme}
  </div>
)}
