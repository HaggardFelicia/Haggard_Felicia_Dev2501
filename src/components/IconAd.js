import React from "react";

const Icons = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={styles.Icons}/>
    );
}
export default Icons;

const styles = {
    Icons: {
        height: "20%",
        cursor: "pointer",
        borderRadius: "5px"
    }
}