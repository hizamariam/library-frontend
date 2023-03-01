import React from 'react';
import { LoginPage } from './Pages/Auth/LoginPage';   

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RegisterPage from './Pages/Auth/RegisterPage';
import BookList from './Pages/ManageBooks/BookList';

function App() {
  // const [books, setBooks] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [selectedBook, setSelectedBook] = useState(null);
  // const [selectedUser, setSelectedUser] = useState(null);

  // useEffect(() => {
  //   // Fetch books and users from database
  //   fetch('/api/books')
  //     .then(res => res.json())
  //     .then(data => setBooks(data));

  //   fetch('http://192.168.15.105:8000/api/users')
  //     .then(res => res.json())
  //     .then(data => setUsers(data));
  // }, []);

  // const addBook = book => {    // Add new book to database and update state
  //   fetch('/api/books', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(book)
  //   })
  //     .then(res => res.json())
  //     .then(data => setBooks([...books, data]));
  // };

  // const editBook = book => {
  //   // Update book in database and update state
  //   fetch(`/api/books/${book.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(book)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const index = books.findIndex(b => b.id === data.id);
  //       const newBooks = [...books];
  //       newBooks[index] = data;
  //       setBooks(newBooks);
  //     });
  // };

  // const deleteBook = id => {
  //   // Delete book from database and update state
  //   fetch(`/api/books/${id}`, { method: 'DELETE' })
  //     .then(() => setBooks(books.filter(b => b.id !== id)));
  // };

  // const addUser = user => {
  //   // Add new user to database and update state
  //   fetch('/api/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => res.json())
  //     .then(data => setUsers([...users, data]));
  // };

  // const editUser = user => {
  //   // Update user in database and update state
  //   fetch(`/api/users/${user.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const index = users.findIndex(u => u.id === data.id);
  //       const newUsers = [...users];
  //       newUsers[index] = data;
  //       setUsers(newUsers);
  //     });
  // };

  // const deleteUSer = id => {
  //   // Delete user from database and update state
  //   fetch(`/api/users/${id}`, { method: 'DELETE' })
  //     .then(() => setUsers(users.filter(u => u.id !== id)));
  // };
  return (
    <div>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>

  );

}
export default App;

