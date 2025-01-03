import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
function Bookmarks({ bookmarks, readTime }) {
  //   console.log(bookmarks);
  return (
    <div className="md:w-1/3 bg-gray-200 p-2 rounded-xl mt-2">
      <div className="p-4 my-1 text-center bg-sky-400 text-white rounded-xl mt-4 mb-4">
        <h2 className="text-2xl font-bold">Total Read Time : {readTime} </h2>
      </div>
      <div className="p-4 my-1 text-center bg-green-500 rounded-xl">
        <h2 className="text-2xl font-bold">
          Bookmarked blogs : {bookmarks.length}
        </h2>
      </div>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.number.isRequired,
};

export default Bookmarks;
