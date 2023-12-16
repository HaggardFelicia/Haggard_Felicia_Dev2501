import React from "react";

const Icons = props => {
    return (
        <img src={props.IconImg} alt={props.ImageAlt} style={styles.Icons}/>
    );
}

export default Icons;

const styles = {
    Icons: {
        height: "175px",
        cursor: "pointer",
        borderRadius: "5px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        
    }
}