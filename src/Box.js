import "./Box.css";

const Box = ({color, handleChange}) => {
    return(
        <div id='box' style={{backgroundColor:color}}>
        </div>
    )
}

export default Box; 