import React from 'react';

const SettingsForm = (props) => {
    return(
        <section style={styles.container}>
            <div style={styles.top}>
                <img style={styles.avatar} src={props.avatar} alt="avatar" />  
            </div>
            <h1 style={styles.h1}>{props.fname} {props.lname}</h1>  
            <div style={styles.info}>
            <p style={styles.row}>
                    <span>User Name: {props.username}</span>
                    <span>Password: {props.password}</span>
                </p>
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
            </div>
            
        </section>
    );
}

export default SettingsForm;

const styles = {
    container: {
        minHeight: "70%",
        width: "50%",
        backgroundColor: "#acbcbc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: "45%",
        left: "20%",
        position: "absolute",
        border: "2px solid #28666e",
        boxShadow: "0px 5px 10px 0px #09151F",
        borderRadius: "20px",
        zIndex: "1",
        padding: "5%",
        color: "#09151F",
        marginBottom: "10%",
    },
    avatar: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "1px solid #09151F",
        marginBottom: "40px",
    },
    h1: {
        color: "#28666e",
        fontFamily: "Merienda, cursive",
        fontWeight: "700",
        fontSize: "1.75rem",
        textAlign: "right",
        marginTop: "10%",
        top: "3%",
        left: "50%",
        position: "absolute",
        textDecoration: "underline",
        zIndex: "100",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        marginBottom: "10px",
    },
    top:{
        top: "5%",
        left: "22%",
        position: "absolute",
    },
    info: {
        top: "40%",
        left: "20%",
        position: "absolute",
        width: "100%",
    }
};