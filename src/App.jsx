import "./App.css";
import { useState } from "react";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  //Add to bookmark
  const handleAddToBookmark = (blog) => {
    console.log("Bookmark  has been clicked", blog);
    setBookmarks([...bookmarks, blog]);
  };
  //Add total read time
  const handleReadTime = (time, id) => {
    console.log("Read Time has been clicked", time);
    setReadTime(readTime + time);
    handleRemoveBookmark(id);
  };
  // Remove from bookmark after reading
  const handleRemoveBookmark = (id) => {
    console.log("Remove bookmark has been clicked", id);
    const newBookMark = bookmarks
      .slice()
      .filter((Bookmark) => Bookmark.id !== id);
    setBookmarks(newBookMark);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex  max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadTime={handleReadTime}
        ></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  );
}

export default App;
