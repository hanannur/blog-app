import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogData from "../Data/BlogData";
function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    const allBlogs = [...BlogData, ...stored];
    const found = allBlogs.find((b) => String(b.id) === id);
    if (found) {
      setBlog(found);
      setTitle(found.title);
      setDescription(found.description);
      setContent(found.content);
    }
  }, [id]);

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required.");
      return;
    }

    const updatedBlog = {
      ...blog,
      title,
      description,
      content,
      editedAt: new Date().toLocaleDateString(),
    };

    const stored = JSON.parse(localStorage.getItem("blogs")) || [];
    const updatedBlogs = stored.map((b) => (b.id === id ? updatedBlog : b));
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    navigate(`/blog/${id}`);
  };

  if (!blog) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Description"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border rounded h-40"
        placeholder="Content"
        required
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditBlog;
