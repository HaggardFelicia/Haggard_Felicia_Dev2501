import React  from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const MedChart=({chartMed})=>{
    return(
        <div style={styles.container}>
            <article key={chartMed.id} style={styles.card}>
                <h1 style={styles.h1}>{chartMed.chartHeader}</h1>
                <LineChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#09151F" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#28666e" />
                </LineChart>
            </article>
        </div>
    )
}

export default MedChart;

const styles={
    card: {
        height: "60%",
        width: "80%",
        backgroundColor: "#acbcbc",
        display: "flex",
        boxShadow: "0px 5px 10px 0px #28666e",
        transition: "transform 0.3s ease-in-out",
        margin: "2%",
        paddingHorizontal: "2%",
        textAlign: "center",
        position: "relative",
        top: "10%",
        flexDirection: "row",
        borderRadius: "10px",
        wrap: "wrap",
        color: "#09151F",
    },
    h1: {
        paddingLeft: "3%",
        paddingTop: "2%",
        color: "#09151F",
        position: "relative",
        textAlign: "left",
        width: "40%",
        fontSize: "1rem",
    },
    container: {
        minHeight: "100%",
    },
}