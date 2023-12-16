import React, {Component} from "react";
import Form from "../components/Form";
import PostCard from "../components/PostCard";
import AvatarUrl from "../images/Avatar.png";

class App extends Component {

  state = {
    postList: [
      {
        pAvatar: AvatarUrl,
        alt: "avatar",
        postName: 'Post Name',
        postContent: 'Post description',
      },
      {
        pAvatar: AvatarUrl,
        alt: "avatar",
        postName: 'Post Name 2',
        postContent: 'Post description 2',
      },
      {
        pAvatar: AvatarUrl,
        alt: "avatar",
        postName: 'Post Name 3',
        postContent: 'Post description 3',
      }
    ]
  }

  //function for input values
  getInput = (e) => {
    this.setState({[ e.target.pAvatar]: e.target.value,
                    [e.target.alt]: e.target.value,
                    [e.target.postName]: e.target.value,
                    [e.target.postContent]: e.target.value });
  }

  //add item function
  addItem= (e) => {
    e.preventDefault();
    this.setState({
      postList: [
        ...this.state.postList,
        {
          pAvatar: this.state.pAvatar,
          alt: this.state.alt,
          postName: this.state.postName,
          postContent: this.state.postContent,
        }
      ]
    })
    e.target.reset();
  }

  //delete function
  removeItem = key => {
    const newList = [...this.state.postList];
    newList.splice(key, 1);
    this.setState(()=>({
      postList: newList
    }));
  }

  render() {
    let postState = this.state.postList.map((element, i) => {
      return <PostCard 
                  key={i} 
                  val={element}
                  delete={()=>this.removeItem(i)}
              />
    })

// loop through the state

    return (
      <div className="App" style={styles.container}>
        <Form getInput={this.getInput} addItem={this.addItem}/>
        {postState}
      </div>
    );
  }
}

export default App;

const styles = {
  container: {
    minHeight: "100%",
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
  },
}