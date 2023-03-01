import React, { useState } from "react";

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      isbn,
      publisher,
      publicationDate,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setIsbn("");
    setPublisher("");
    setPublicationDate("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div>
          <label>Publisher:</label>
          <input
            type="text"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
          />
        </div>
        <div>
          <label>Publication Date:</label>
          <input
            type="date"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default AddBook;
