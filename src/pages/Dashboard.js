import React, {useState} from "react";
import smallChart from "../components/charts/smallChart";

function Dashboard(){
        <h1 style={styles.h1}>Dashboard</h1>  
        const [chartSmall] = useState([
            {chartHeader: 'chart header ex'},
            {chartHeader: 'chart header ex'}
        ]);
}


export default Dashboard;

const styles={
    container: {
        height: "100%",
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