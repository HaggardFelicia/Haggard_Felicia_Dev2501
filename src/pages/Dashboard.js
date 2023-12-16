import React, {useState} from "react";
import SmallChart from "../components/charts/smallChart";

function Dashboard(){
        const [chartSmall] = useState([
            {chartHeader: 'chart header ex'},
            {chartHeader: 'chart header ex'}
        ]);

        return(
            <section style={styles.container}>
                <header style={styles.h1}>
                    <h1>Dashboard</h1>
                </header>
            </section>
        )
}


export default Dashboard;

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