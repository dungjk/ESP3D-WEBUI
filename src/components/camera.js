import { h} from "preact"


const SubItem = props => (
    <div class="text-info">
      {props.children}
    </div>
)


export default () => (
  <div>
   <SubItem> <div class="text-danger">camera </div> et autre</SubItem>
  </div>
)
