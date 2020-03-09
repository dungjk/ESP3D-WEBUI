import { h } from "preact"
import { useState} from "preact/hooks"


export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return(
   <div>
   <button type="button" class="btn btn-primary tooltip-test" onClick={() => {setShow(!show); console.log("click")}} data-toggle="tooltip" title="show/hide dialog" >
    Launch demo modal
    </button>
    
    <div className={show?"d-block":"d-none"} >
    Witness 1
    </div>
    <modal tabindex="-1" role="dialog" className={show?"modal d-block":"modal d-none"}>
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" onClick={() => {setShow(!show); console.log("click")}} aria-label="Close">
          <span aria-hidden="true"><b>X</b></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick={() => {setShow(!show); console.log("click")}} title="close window">Save changes</button>
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

