import React from 'react';
import ImageUrl from '../images/Social.png';
import Avatar from '../images/Avatar.png';
import { FaSearch } from 'react-icons/fa';
import Icons from './Icons';
import { IoSettings } from "react-icons/io5";
import IconBtn from './IconBtn';

const Header = props => {
    return (
        <header className="header" style={styles.header}>
            <div style={styles.logo}>
                <Icons IconImg={ImageUrl} ImageAlt="Bee Social Logo" style={styles.Icon}/>
                <h1 style={styles.h1}>Social</h1>
            </div>
            <div style={styles.searchContainer}>
                <span style={styles.searchIcon}>
                    <FaSearch />
                </span>
                <input
                    type="text"
                    placeholder="Search" id='inputID'
                    style={styles.input}/>
            </div>
            <div style={styles.flexRow}>
                <Icons IconImg={Avatar} ImageAlt="Bee Avatar" style={styles.Icon}/>
                <IconBtn btnStyle={styles.button} btnText={<IoSettings/>} />
            </div>
        </header>
    );
}

export default Header;

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1%",
        borderBottom: "4px solid #28666e",
        backgroundColor: "#678485"
    },
    h1:{
        fontWeight: "900",
        padding: '5px'
    },
    logo:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#09151F"
    },
    searchContainer: {
        border: "3px solid #28666e",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
    },
    searchIcon: {
        padding: "5px",
        display: "flex",
        alignItems: "center",
        fontSize: "1.2rem"
    },
    input: {
        border: "none",
        flex: "1",
        padding: "10px",
        backgroundColor: "#28666e",
        color: "#CED8D7",
        fontWeight: "500",
        fontFamily: "Merienda, cursive"
    },
    button: {
        border: "none",
        backgroundColor: "#678485",
        color: "#09151F",
        cursor: "pointer",
        fontSize: "2rem",
        paddingTop: "10px"
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
}