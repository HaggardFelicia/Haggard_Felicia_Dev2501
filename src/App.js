import React, {Component} from "react";
import Header from "./components/Header";
import LeftNav from "./components/leftNavigation";
import Form from "./components/Form";
import PostCard from "./components/PostCard";
import RightNav from "./components/RightNav";
import AvatarUrl from "./images/Avatar.png";
class App extends Component {

  state = {
    postList: [
      {
        pAvatar: AvatarUrl,
        alt: "avatar",
        postName: 'Post Name',
        postContent: 'Post description',
      }
    ]
  }
  render() {

    let postState = this.state.postList.map((element, i) => {
      return <PostCard key={i} val={element}/>
    })

    return (
      <div className="App" style={styles.container}>
        <Header />
        <RightNav />
        <LeftNav />
        <Form />
        {postState}        
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