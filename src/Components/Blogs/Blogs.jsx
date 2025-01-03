import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";
const Blogs = ({ handleAddToBookmark, handleReadTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleReadTime={handleReadTime}
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};
export default Blogs;
