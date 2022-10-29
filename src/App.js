import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Input from "./Input";
import Post from "./Post";

let id = 1;
function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (title) => {
    const newPost = { id: id, title: title };

    setPosts([newPost, ...posts]);
    id += 1;
  };

  const deletePost = (id) => {
    console.log("id", id);
    console.log("posts 1", posts);

    const updatePosts = posts.filter((post) => post.id !== id);
    console.log("updatePosts ", updatePosts);
    console.log("posts 2", posts);
    setPosts(updatePosts);
  };

  return (
    <div className="App">
      <NavBar />
      <Input addPost={addPost} />
      {posts.map((doc) => {
        return (
          <Post
            key={doc.id}
            id={doc.id}
            title={doc.title}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
}

export default App;
