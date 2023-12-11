import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import LeftNav from "./components/leftNavigation";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Newsfeed from "./pages/Newsfeed";

function App(){
  return(
    <div style={styles.container}>
      <Header/>
      <main>
        <LeftNav/>
        <section>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="Messages" element={<Messages/>}/>
            <Route path="Newsfeed" element={<Newsfeed/>}/>
          </Routes>
        </section>
      </main>
    </div>
  )
}

export default App;

const styles = {
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#acbcbc",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "center",
    width: "40%",
    height: "30%",
    position: "relative",
    left: "22%",
    right: "22%",
    zIndex: "100",
    backgroundColor: "#678485",
    borderRadius: "15px",
    padding: "5% 10%",
    marginTop: "3%"
  }
}