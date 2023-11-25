import React from "react";
import Header from "./components/Header";
function App() {
  return (
    <div className="App" style={styles.container}>
      <Header />
      <p>Testing</p>
    </div>
  );
}

export default App;

const styles = {
  container: {
    height: "100vh"
  }
}