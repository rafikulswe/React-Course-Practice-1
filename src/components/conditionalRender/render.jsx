import React from 'react'
import Validation from './validation';

const Render = (props) => {
    console.log(props.nameLength);
    let validMsg = null;
    if (props.nameLength > 0) {
        validMsg = <Validation strLegnth={props.nameLength} />
    }
    return ( 
        <div>
            <h6 onClick={props.click}>Name: {props.name}</h6>
            {validMsg}
            <input type="text" value={props.name} onChange={props.change} />
            <p>Age: {props.age}</p>
        </div>
    );
}
 
export default Render;