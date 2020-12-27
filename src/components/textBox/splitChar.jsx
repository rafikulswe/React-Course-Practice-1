import React from 'react';

const SplitChar = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }
    return ( 
        <div style={style} onClick={props.clicked}>
            {props.mainText}
        </div>
    );
}
 
export default SplitChar;