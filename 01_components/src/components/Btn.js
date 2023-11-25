import React from 'react';

const Btn = props => {
    return (
        <button style={styles.btn}>{props.btnText}</button>
    );
}

export default Btn;

const styles = {
    btn:{
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontFamily: 'Merienda',
    }
}