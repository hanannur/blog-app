import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { bookmarkAtom } from "../atoms/bookmarkAtom";
import BlogDetails from "./BlogDetails";
import BlogData from "../Data/BlogData";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

function Bookmark({ toggleBookmark }) {
  const [bookmarked] = useAtom(bookmarkAtom);

  const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const allBlogs = [...BlogData, ...storedBlogs];
  const bookmarkedBlogs = allBlogs.filter((blog) =>
    bookmarked.includes(blog.id)
  );

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        📌 Bookmarked Blogs
      </h2>
      {bookmarkedBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedBlogs.map((blog) => {
            const isBookmarked = bookmarked.includes(blog.id);
            return (
              <div key={blog.id} className="max-w-sm w-full mx-auto">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="bg-white rounded-lg transition-shadow duration-300 overflow-hidden relative block"
                  >
                    <div className="flex items-center gap-2 p-4">
                      <img
                        src={blog.image || blog.imageUrl}
                        alt={blog.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {blog.author}
                        </p>
                        <p className="text-xs text-gray-500">
                          Posted on {blog.date}
                        </p>
                      </div>
                      <button
                        onClick={toggleBookmark}
                        className="absolute top-2 right-2 p-2"
                      >
                        {isBookmarked ? (
                          <BsBookmarkFill className="text-xl text-black" />
                        ) : (
                          <BsBookmark className="text-xl text-gray-400" />
                        )}
                      </button>
                    </div>

                    <h3 className="text-xl font-bold mb-1 px-4">
                      {blog.title}
                    </h3>
                    <img
                      src={blog.image || blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <p className="text-sm text-gray-600 mb-4 px-4">
                      {blog.description}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No bookmarks yet. Go add some!
        </p>
      )}
    </div>
  );
}
export default Bookmark;
