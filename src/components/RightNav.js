import React from 'react';
import AdCard   from './AdCard';
import ad1 from '../images/Weekly.png';
import ad2 from '../images/ADS.png';

const RightNav = props => {
    return (
        <div style={styles.rightNav}>
            <AdCard adStyle={styles.ad1}  ad={ad1} h1="Weekly Event" pText="This is a weekly event" />
            <AdCard adStyle={styles.ad2} adImg={styles.adImg} ad={ad2} h1="Ads in Canva!" pText="These ads were created by Felicia Haggard in Canva." />
        </div>
    );
}
export default RightNav;

const styles = {
    rightNav: {
        width: "15%",
        height: "100vh",
        backgroundColor: "#28666e",
        borderLeft: "10px solid #678485",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "3%",
        float: "right",
        position: "absolute !important",
        top: "0",
        right: "0",
        overflow: "hidden",
        paddingBottom: "5%",
    },
    ad1: {
        position: "absolute !important",
        alignItems: "center",
        height: "10%",
        margin: "10px 20px 100px 10px",
        justifyContent: "center",
        textAlign: "left",
    },
    ad2: {
        position: "absolute !important",
        alignItems: "center",
        height: "10%",
        justifyContent: "center",
        margin: "120px 30px 10px 0px",
        paddingLeft: "60px",
        textAlign: "left",
    },
};