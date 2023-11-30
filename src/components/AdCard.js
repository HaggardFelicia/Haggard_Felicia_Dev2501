import React from 'react';
import Icons from './IconAd';
// import ImgUrl from '../images/Social.png';
import ad1 from '../images/Weekly.png';
import ad2 from '../images/ADS.png';
const AdCard = props => {
    return(
        <div style={styles.rightNav}>
                <div style={styles.padding}>
                    <Icons IconImg={ad1} ImageAlt="Weekly Event ad" />
                    <h1 style={styles.h1}>Weekly Ad</h1>
                    <p>Weekly talking event coming soon!</p>
                </div>
                <div style={styles.padding2}>
                    <Icons IconImg={ad2} ImageAlt="Canva ad" />   
                    <h1 style={styles.h1}>Canva</h1>
                    <p>Ads made in Canva By Felicia Haggard!</p>
                </div>
        </div>
    );
}

export default AdCard;

const styles = {
    rightNav: {
        width: "15%",
        height: "100vh",
        backgroundColor: "#28666e",
        borderLeft: "10px solid #678485",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "5%",
        float: "right"
    },
    padding: {
        padding: "30%",
    }, 
    padding2: {
        padding: "30%",
        top: "20%",
        position: "absolute",
        height: "110%",
    },
    h1: {
        fontSize: "1.2rem",
    },

}