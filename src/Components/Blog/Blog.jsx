import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";
import "./Blog.css";
const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
  // console.log(blog);
  const {
    id,
    coverPicture,
    author,
    authorImage,
    title,
    postedDate,
    readingTime,
    hashtag,
  } = blog;
  return (
    <div className="blog p-4 my-4">
      <img
        className="border-black border w-full h-64 object-fill"
        src={coverPicture}
        alt={title}
      />
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center">
          <img
            className="h-14 w-14 rounded-full border-black border"
            src={authorImage}
            alt={author}
          />
          <div className="ml-4">
            <p className="text-lg">{author}</p>
            <p className="text-sm text-gray-400">{postedDate}</p>
          </div>
        </div>
        <div>
          <p className="text-sm flex items-center gap-4">
            {readingTime} minutes read{" "}
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="text-blue-500 text-2xl"
            >
              <FaRegBookmark />
            </button>{" "}
          </p>
        </div>
      </div>
      <h2 className="text-4xl my-4">{title}</h2>
      <p className="text-base text-gray-400 my-4">{hashtag}</p>
      <button
        onClick={() => handleReadTime(readingTime, id)}
        className="bg-sky-400 px-3 py-2 rounded text-white"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleReadTime: PropTypes.func.isRequired,
};

export default Blog;
