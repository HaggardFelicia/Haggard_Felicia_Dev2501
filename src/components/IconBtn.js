import React from 'react';
const IconBtn = props => {
    return (
        <button style={props.btnStyle} onClick={props.onClick}>{props.btnText}</button>
    );
}

export default IconBtn;
