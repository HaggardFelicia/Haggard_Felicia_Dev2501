import React, {Component} from "react";
import Header from "./components/Header";
import LeftNav from "./components/leftNavigation";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import RightNav from "./components/RightNav";
class App extends Component {
  render() {
    return (
      <div className="App" style={styles.container}>
        <Header />
        <RightNav />
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
    backgroundColor: "#acbcbc",
  }
}