import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { author, title } = bookmark;
  return (
    <div>
      <div className="  bg-slate-400 rounded-xl text-start p-4 my-3">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-sm ">{author}</p>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
