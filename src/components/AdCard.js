import React from 'react';
import Icons from './IconAd';

const AdCard = props => {
    return(
        <div style={props.adStyle}>
            <Icons style={props.adImg} IconImg={props.ad} ImageAlt="Weekly Event ad" />
            <h1 style={styles.h1}>{props.h1}</h1>
            <p style={styles.p}>{props.pText}</p>
        </div>    
    );
}

export default AdCard;

const styles = {
    h1: {
        fontSize: "1.2rem",
    },
    p: {
        fontSize: ".8rem",
        marginBottom: "10% !important",
        paddingBottom: "10% !important",
    }
}