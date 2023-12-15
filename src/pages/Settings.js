import React from "react";

function Settings(){
    return(
        <div style={styles.container}>
            <h1 style={styles.h1}>Settings</h1>
        </div>
    )
}

export default Settings;

const styles={
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#acbcbc",
    },
    h1: {
        color: "#09151F",
        fontFamily: "Merienda, cursive",
        fontWeight: "700",
        fontSize: "1.75rem",
        textAlign: "center",
        marginTop: "10%",
        top: "10%",
        position: "absolute",
        left: "20%",
        textDecoration: "underline",
    }
}