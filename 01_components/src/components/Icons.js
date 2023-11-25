import React from "react";

const Icons = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={styles.Icons}/>
    );
}
export default Icons;

const styles = {
    Icons: {
        height: "50px",
        cursor: "pointer",
        borderRadius: "50%"
    }
}