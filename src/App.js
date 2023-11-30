import React, {Component} from "react";
import Header from "./components/Header";
import LeftNav from "./components/leftNavigation";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import AdCard from "./components/AdCard";
class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
        <Header />
        <AdCard />
        <LeftNav />
        <Form />
        <PostCard h1Text="Testing" pText="testing" />
        
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    height: "100%",
    width: "100%",
    display: "block",
    backgroundColor: "#acbcbc",
    fontFamily: "Merienda, cursive",  
  }
}