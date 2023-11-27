import React from 'react';

const AdCard = props => {
    <div style={styles.rightNav}>
            <div>
                <img src={props.IconImg} alt={props.ImageAlt} style={styles.Icons}/> 
                <h1>{props.h1Text}</h1>
                <p>{props.pText}</p>
            </div>
    </div>
}

export default AdCard;

const styles = {
    rightNav: {
        width: "15%",
        height: "100vh",
        backgroundColor: "#09151F",
        borderLeft: "1px solid #678485",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "right"
    }
}