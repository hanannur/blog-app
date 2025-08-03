import { useState } from "react";
function BlogForm({ onClose, addPost }) {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBlog = {
      id: Date.now().toString(),
      title,
      author,
      description,
      content,
      date,
      imageUrl,
    };

    addPost(newBlog);
    setTitle("");
    setAuthor("");
    setDescription("");
    setContent("");
    setDate("");
    onClose();
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 px-4">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[600px] bg-white p-6 rounded-2xl shadow-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 p-2">
          <h2>Post Blog</h2>
          <div className="flex justify-between">
            <div className="mb-4">
              <label className=" text-left block text-gray-700 text-sm font-medium mb-2">
                Author
              </label>
              <input
                type="text"
                value={author}
                placeholder="Full Name"
                onChange={(event) => setAuthor(event.target.value)}
                className=" w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className=" text-left block text-gray-700 text-sm font-medium mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                placeholder="Full Name"
                onChange={(event) => setDate(event.target.value)}
                className=" w-full px-2 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className=" text-left block text-gray-700 text-sm font-medium mb-2">
              Profile Link
            </label>
            <input
              type="url"
              value={imageUrl}
              placeholder="https://example.com/image.jpg"
              onChange={(event) => setImageUrl(event.target.value)}
              className=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className=" text-left block text-gray-700 text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 text-sm font-medium mb-2">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-left text-gray-700 text-sm font-medium mb-2">
              content
            </label>
            <textarea
              rows="4"
              type="text"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogForm;
