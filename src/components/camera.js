import { h} from "preact"


const SubItem = props => {
    return (
    <div class="text-info">
      {props.children}
      {console.log(props.children)}
      {console.log(props.children.length)}
      {(props.children[0].props)?console.log(props.children[0].props.children):console.log(props.children[0])} 
    </div>
)
}

export default () => (
  <div>
   <SubItem><div class="text-danger">camera </div> et autre</SubItem>
  </div>
)
