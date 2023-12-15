import React from 'react';
import { Link } from 'react-router-dom';

const leftNav = props => {
    return (
        <div style={styles.leftNav}>
            <Link to="/Dashboard" style={styles.button}>Dashboard</Link>
            <Link to="/Messages" style={styles.button}>Messages</Link>
            <Link to="/Newsfeed" style={styles.button}>Newsfeed</Link>
        </div>
    );
}

export default leftNav;

const styles = {
    leftNav: {
        width: "15%",
        height: "100vh",
        backgroundColor: "#28666e",
        borderRight: "10px solid #678485",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "10%"
    },
    button:{
        color: "#09151F",
        backgroundColor: "#678485",
        padding: "10px",
        margin: "10%",
        border: "none",
        borderRadius: "5px",
        fontFamily: "Merienda, cursive",
        fontWeight: "700",
        width: "100px",
        cursor: "pointer"
    }
}