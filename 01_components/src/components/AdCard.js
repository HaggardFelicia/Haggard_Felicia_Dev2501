import React from 'react';
import Icons from './Icons';
import ImgUrl from '../images/Social.png';
const AdCard = props => {
    <div style={styles.rightNav}>
            <div>
                <Icons IconImg={ImgUrl} ImageAlt="Bee Social Logo" />   
                <h1>Testing</h1>
                <p>Testing</p>
            </div>
            <div>
                <Icons IconImg={ImgUrl} ImageAlt="Bee Social Logo" />   
                <h1>Testing</h1>
                <p>Testing</p>
            </div>
    </div>
}

export default AdCard;

const styles = {
    rightNav: {
        position: "relative !important",
        right: "0% !important",
        left: "80%",
        width: "140px",
        height: "100vh",
        backgroundColor: "#28666e",
        borderRadius: "15px",
        padding: "5% 10%",
        marginTop: "3%",
        borderLeft: "1px solid #678485",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        zIndex: "1000 !important",
    },
}