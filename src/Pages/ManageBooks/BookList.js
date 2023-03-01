import React, { useEffect, useState } from 'react';
import { api } from '../../Services/api';
import BookForm from './BookForm';

function BookList() {
  const [books, setBooks] = useState([
    {id:1, author: 'Mariam Hiza',title: 'My first Book',description: 'I like this books'},
    {id:2, author: 'Mariam Hiza',title: 'My first Book',description: 'I like this books'},
    {id:3, author: 'Mariam Hiza',title: 'My first Book',description: 'I like this books'},
    {id:4, author: 'Mariam Hiza',title: 'My first Book',description: 'I like this books'},
    {id:5, author: 'Mariam Hiza',title: 'My first Book',description: 'I like this books'},
  ]);

  useEffect(()=>{
    api.get('/books').then(({data})=>{
      console.log(data);
      if(data?.success){
        setBooks(data.books.data)
      }
    }).catch(error=>console.log(error))
  }, [])

  return (
    <div className='m-auto container'>
      <h2>Books</h2>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                {/* <BookForm book={book} onSubmit={()=>{}} /> */}
                <button className='form-button m-1' onClick={() => {}}><input type={'checkbox'} />Favorite</button>
                <button className='form-button m-1' onClick={() => {}}>Like</button>
                <button className='form-button m-1' onClick={() => {}}>Comment</button>
                <button className='form-button m-1' onClick={() => {}}>Edit</button>
                <button className='form-button m-1' onClick={() => {}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
