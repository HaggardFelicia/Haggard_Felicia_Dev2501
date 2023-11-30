import React from 'react';
import Btn from './Btn';
const leftNav = props => {
    return (
        <div style={styles.leftNav}>
            <Btn btnStyle={styles.button} btnText="Newsfeed" />
            <Btn btnStyle={styles.button} btnText="Messages" />
            <Btn btnStyle={styles.button} btnText="Watch" />
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
        paddingBlock: "5px",
        margin: "8%",
        border: "none",
        borderRadius: "5px",
        fontFamily: "Merienda, cursive",
        fontWeight: "700",
        width: "80px",
        cursor: "pointer"
    }
}