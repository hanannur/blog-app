import { useState, useEffect } from "react";
import BlogDetail from "./pages/BlogDetails";
import Bookmark from "./pages/Bookmarks";
import EditBlog from "./Edit/EditBlog";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(stored);
  }, []);
  const addPost = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };
  console.log(addPost);

  return (
    <div>
      {/* <div className="text-right my-3 mr-3 ">{showForm && <BlogForm />}</div> */}
      <Navbar addPost={addPost} />
      {/* {showForm && <BlogForm />} */}
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />

        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
