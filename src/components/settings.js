import { h } from "preact"
import { useState} from "preact/hooks"



export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return(
   <div>
   <button type="button" class="btn btn-primary" onClick={() => {setShow(!show); console.log("click")}} >
    Launch demo modal
    </button>
    
    <div className={show?"d-block":"d-none"} >
    Witness 1
    </div>
    <modal class="modal" tabindex="-1" role="dialog" className={show?"d-block":"d-none"}>
    <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" onClick={() => {setShow(!show); console.log("click")}} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={() => {setShow(!show); console.log("click")}}>Save changes</button>
        <button type="button" class="btn btn-secondary" onClick={() => {setShow(!show); console.log("click")}}>Close</button>
      </div>
    </div>
  </div>
    </modal>
  
   <div>
     Witness 2
    </div>
  </div>
  )
}

