import React from 'react';
const Btn = props => {
    return (
        <button style={props.btnStyle} src={props.btnImg}>{props.btnText}</button>
    );
}

export default Btn;
