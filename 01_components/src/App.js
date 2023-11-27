import React from "react";
import Header from "./components/Header";
import LeftNav from "./components/leftNavigation";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import AdCard from "./components/AdCard";

function App() {
  return (
    <div className="App" style={styles.container}>
      <Header />
      <LeftNav />
      <Form />
      <PostCard h1Text="Testing" pText="testing" />
      <AdCard h1Text="Testing" pText="testing" />{/* //!  Doesn't work  */}

    </div>
  );
}

export default App;

const styles = {
  container: {
    height: "100vh",
    width: "100%",
  }
}