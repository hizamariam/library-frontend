import React from 'react';

const Book = ({ book, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(book.id);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Book;
