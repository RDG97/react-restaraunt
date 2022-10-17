export default function Clicker(props) {
    return(
        <div onClick={() => {props.handleClick(props.text); console.log('test')}} className="d-flex bg-warning border my-3 mx-3 justify-content-center align-items-center display-6">
                {props.text}
            
            </div>
    )
}