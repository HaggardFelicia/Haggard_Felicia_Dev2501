import React from 'react';
import Btn from './Btn';
import Icons from './Icons';
import Avatar from '../images/Avatar.png';
const Form = props => {
    return (
        <form onSubmit={props.addItem}>
            <div style={styles.form}>
                <div style={styles.avatar}>
                    <Icons IconImg={Avatar} ImageAlt="Avatar" style={styles.Icons}/>
                </div>
                <div style={styles.block}>
                    <input name='postName' value={props.postName} style={styles.input} type="text" placeholder="Post Title" onChange={props.getInput} />
                    <input id='inputText' name='postContent' value={props.postContent} style={styles.input} type="text" placeholder="Post Text" onChange={props.getInput}/>
                </div>
                <Btn btnText="Post" btnStyle={styles.btn} />
            </div>
        </form>
    );
}

export default Form;

const styles = {
    form:{
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "center",
        width: "40%",
        height: "20%",
        position: "absolute",
        top: "20%",
        left: "22%",
        right: "22%",
        zIndex: "100",
        backgroundColor: "#678485",
        borderRadius: "15px",
        padding: "5% 10%",
        marginBottom: "5%"
    },
    avatar: {
        position: "absolute !important",
        top: "5%",
        left: "5% !important",
        marginRight: "5%",
    },
    block:{
        display: "flex",
        flexDirection: "column",
        width: "90%",
    },
    input: {
        height: "25px",
        borderRadius: "5px",
        textAlign: "left",
        border: "none",
        margin: "5px",
        padding: "10px",
        backgroundColor: "#CED8D7",
        color: '#09151F',
        fontFamily: "Merienda, cursive",
        fontSize: "1.25rem",
        fontWeight: "600 !important",
    },
    btn: {
        position: "relative",
        height: "18%",
        backgroundColor: "#28666e",
        borderRadius: "5px",
        border: "none",
        color: "white",
        fontSize: "1rem",
        cursor: "pointer",
        width: "20%",
        letterSpacing: "2px",
        fontWeight: "400 !important",
        fontFamily: "Merienda, cursive",
        textAlign: "center",
        justifyContent: "center",
        margin: "5px",
    },
}