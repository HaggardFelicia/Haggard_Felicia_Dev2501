import React from 'react';
import Icons from './Icons';
// import Avatar from '../images/Avatar.png';
import IconBtn from './IconBtn';
import { FaEdit, FaTimes  } from "react-icons/fa";

const PostCard = props => {
    return (
        <div style={styles.card}>
            <div style={styles.avatar}>
                <Icons IconImg={props.val.pAvatar} ImageAlt={props.val.alt} style={styles.Icon}/>
            </div>
            <div style={styles.block}>
                <h2 style={styles.bground}>{props.val.postName}</h2>
                <p id='pText' style={styles.bground}>{props.val.postContent}</p>
            </div>
            <div style={styles.btnDiv}>
                <IconBtn btnStyle={styles.button} btnText={<FaEdit/>} />
                <IconBtn btnStyle={styles.button} btnText={<FaTimes/>} />
            </div>
        </div>
    );
}
export default PostCard;
const styles = {
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "left",
        justifyContent: "center",
        width: "40%",
        height: "30%",
        position: "absolute",
        top: "60%",
        left: "22%",
        right: "22%",
        zIndex: "100",
        backgroundColor: "#678485",
        borderRadius: "15px",
        padding: "5% 10%",
        marginTop: "3%"
    },
    avatar: {
        position: "absolute !important",
        top: "5%",
        left: "5% !important",
        marginTop: "25px",
        marginRight: "5%",
    },
    block: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        textAlign: "left",
        margin: "5px",
        backgroundColor: "#CED8D7",
        borderRadius: "10px",
    },
    button: {
        position: "relative",
        height: "30px",
        backgroundColor: "#28666e",
        borderRadius: "5px",
        border: "none",
        color: "white",
        cursor: "pointer",
        fontWeight: "400 !important",
        justifyContent: "center",
        margin: "5px",
        aspectRatio: "1/1",
        alignItems: "center",
        fontSize: "1.25rem",
    },
    btnDiv: {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%"
    },
    bground:{
        padding: "15px",
        borderRadius: "5px",
        height: "20px",
    },
}