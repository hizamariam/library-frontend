import React, { useState } from 'react';

function BookForm({ book = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    title: book.title || '',
    author: book.author || '',
    genre: book.genre || '',
    yearPublished: book.yearPublished || ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...book, ...formData });
    setFormData({ title: '', author: '', genre: '', yearPublished: '' });
  };
}
export default BookForm;
