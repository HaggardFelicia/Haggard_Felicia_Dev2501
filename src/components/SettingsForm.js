import React from 'react';

const SettingsForm = (props) => {
    return(
        <section style={styles.container}>
            <img style={styles.avatar} src={props.avatar} alt="avatar" />  
            <h1 style={styles.h1}>{props.fname}{props.lname}</h1>  
            <p style={styles.row}>
                <span>Street: {props.street}</span>
                <span>City: {props.city}</span>
            </p>
            <p style={styles.row}>
                <span>State: {props.state}</span>
                <span>Zip: {props.zipcode}</span>
            </p>
            <p style={styles.row}>
                <span>Email: {props.email}</span>
            </p>
            <p style={styles.row}>
                <span>Phone: {props.phone}</span>
            </p>
        </section>
    );
}

export default SettingsForm;

const styles = {
    container: {
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#acbcbc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid #09151F",
        marginBottom: "20px",
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
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        marginBottom: "10px",
    },
};