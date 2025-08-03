import { useNavigate, useParams } from "react-router-dom";
import BlogData from "../Data/BlogData";
import { FiEdit2, FiBookmark } from "react-icons/fi";
import { useState, useEffect } from "react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

import { bookmarkAtom } from "../atoms/bookmarkAtom";
// import Home from "./Home";
// import BlogCard from "../components/BlogCard";
import { useAtom } from "jotai";
// //import bookmark from "../assets/bookmarkicon.png";

function BlogDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [bookmarked, setBookmarked] = useAtom(bookmarkAtom);

  console.log(bookmarked);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    const allBlogs = [...BlogData, ...stored];
    const found = allBlogs.find((b) => String(b.id) === String(id));
    console.log("Found blog:", found);
    setBlog(found);
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Blog not found or still loading...
      </div>
    );
  }
  const isBookmarked = bookmarked.includes(blog?.id);

  // const bookmarkClass = isBookmarked ? (
  //   <BsBookmarkFill className="text-xl text-black" />
  // ) : (
  //   <BsBookmark className="text-xl text-gray-400" />
  // );
  function toggleBookmark() {
    // if (!blog) return <p>Blog not found</p>;

    setBookmarked((prev) =>
      isBookmarked ? prev.filter((bid) => bid !== blog.id) : [...prev, blog.id]
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-600 hover:underline flex items-center"
        >
          ← Back
        </button>
        <div className=" flex items-ceter gap-4">
          <button onClick={toggleBookmark}>
            {isBookmarked ? (
              <BsBookmarkFill className="text-xl text-black" />
            ) : (
              <BsBookmark className="text-xl text-gray-400" />
            )}
          </button>

          <button
            onClick={() => navigate(`/edit/${blog.id}`)}
            className="text-gray-600 hover:text-blue-600"
          >
            <FiEdit2 size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 p-4">
        <img
          src={blog.image || blog.imageUrl}
          alt={blog.author}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">{blog.author}</p>
          <p className="text-xs text-gray-500">Posted on {blog.date}</p>
          {blog.editedAt && (
            <p className="text-xs text-gray-500">
              ✏️ Edited on {blog.editedAt}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-center mx-8 my-4">
        <img
          src={
            blog.imageUrl ||
            blog.image ||
            "https://via.placeholder.com/600x400?text=No+Image"
          }
          alt={blog.title}
          className="w-[1000px] h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="text-sm text-gray-600 mb-6 text-center">
        <span>By {blog.author}</span> · <span>{blog.createdAt}</span>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-center">{blog.title}</h1>
      <p className="text-lg text-center font-medium text-gray-800 mb-4">
        {blog.description}
      </p>
      <p className="text-base text-center leading-relaxed text-gray-700 whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
}
export default BlogDetail;
