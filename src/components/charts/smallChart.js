import React from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

const SmallChart=({chartSmall})=>{
    return(
        <article key={chartSmall.id} style={styles.card}>
            <h1 style={styles.h1}>{chartSmall.chartHeader}</h1>
            <PieChart width={300} height={300}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#28666e" />
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={65} fill="#09151F" label />
            </PieChart>
        </article>
    )
}

export default SmallChart;

const styles={
    card: {
        height: "60%",
        width: "70%",
        backgroundColor: "#acbcbc",
        display: "flex",
        boxShadow: "0px 5px 10px 0px #09151F",
        transition: "transform 0.3s ease-in-out",
        margin: "2%",
        paddingHorizontal: "2%",
        textAlign: "center",
        position: "absolute !important",
        left: "20%",
        top: "10%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        wrap: "wrap",
    },
    h1: {
        borderBottom: "1px solid #09151F",
        padding: "1%",
    },
}
