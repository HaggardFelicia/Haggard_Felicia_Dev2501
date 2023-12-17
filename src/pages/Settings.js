import React, {useState, useEffect} from "react";
import SettingsForm from "../components/SettingsForm";

function Settings(){
    const [userData, setuserData]=useState(null);

    useEffect(()=>{
        async function fetchAPI(){
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();
            const user = data.results;
            console.log(user);
            setuserData(user);
        }
        fetchAPI();
    },[]);

    return(
        <section style={styles.container}>
            <h1 style={styles.h1}>Settings</h1>
            {userData && <SettingsForm 
                avatar={userData.picture.large}
                fname={userData.name.first}
                lname={userData.name.last}
                street={userData.location.street.number + " " + userData.location.street.name}
                city={userData.location.city}
                state={userData.location.state}
                zipcode={userData.location.postcode}
                email={userData.email}
                phone={userData.phone}
            />}
        </section>
    )
}

export default Settings;

const styles={
    container: {
        minHeight: "100%",
        width: "100%",
        backgroundColor: "#acbcbc",
    },
    h1: {
        color: "#09151F",
        fontFamily: "Merienda, cursive",
        fontWeight: "700",
        fontSize: "1.75rem",
        textAlign: "center",
        marginTop: "10%",
        top: "10%",
        position: "absolute",
        left: "20%",
        textDecoration: "underline",
    }
}