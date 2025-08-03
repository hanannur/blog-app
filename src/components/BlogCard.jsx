import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const navigate = useNavigate();
  console.log("BlogCard image:", blog);

  return (
    <div
      onClick={() => navigate(`/blog/${blog.id}`)}
      className=" max-w-60 height-auto bg-white rounded-xl shadow p-5 mx-4  text center my-5 hover:scale-100 cursor-pointer"
    >
      <img
        src={
          blog.image ||
          blog.imageUrl ||
          "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt="no image"
        className="max-w-46 max-h-58 object-cover rounded-lg mb-2"
      />

      <h5 className="text-xl font-semi-bold mb-1">{blog.title}</h5>
      <p className="line-clamp-3">{blog.description}</p>

      <div className="flex items-center gap-2 mt-2">
        <img
          src={blog.image || blog.imageUrl}
          alt={blog.author}
          className="w-6 h-6 rounded-full object-cover"
        />
        <span className="text-sm text-gray-700">By {blog.author}</span>
        <span className="text-xs text-gray-500 ml-auto">
          {blog.date || blog.editedAt}
        </span>
      </div>
    </div>
  );
}
