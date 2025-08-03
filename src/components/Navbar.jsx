import { Link } from "react-router-dom";
import Home from "../pages/Home";
import BlogForm from "./BlogForm";
import { useState } from "react";
function Navbar({ addPost }) {
  const [isBlog, setIsBlog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-pink-400 text-xl font-bold">Blog</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bookmark" className="hover:text-yellow-300 ">
              Bookmark
            </Link>
          </li>
          <li>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-white"
              onClick={() => setIsBlog(true)}
            >
              Post a Blog
            </button>
          </li>
        </ul>

        <button
          className="text-white block  text-2xl md:hidden "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {menuOpen && (
          <ul className="md:hidden mt-4 flex flex-col space-y-4  text-white font-medium ">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bookmark"
                className="hover:text-yellow-300"
                onClick={() => setMenuOpen(false)}
              >
                Bookmark
              </Link>
            </li>
            <li>
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-pink-600"
                onClick={() => {
                  setIsBlog(true);
                  setMenuOpen(false);
                }}
              >
                Post a Blog
              </button>
            </li>
          </ul>
        )}
        {isBlog && (
          <BlogForm onClose={() => setIsBlog(false)} addPost={addPost} />
        )}
      </div>
    </nav>
  );
}
// <nav class="navbar navbar-expand-lg navbar-light bg-light {
export default Navbar;
