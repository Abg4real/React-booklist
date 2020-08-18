import React, { useState, useContext } from 'react';
import { BookContext } from './Contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setISBN] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            book: { title, author, isbn }
        });
        setTitle('');
        setAuthor('');
        setISBN('');
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Name" id="title" maxLength="30"
                    value={title} onChange={(e) => setTitle(e.target.value)} required
                />
                <label htmlFor="author">Author</label>
                <input type="text" placeholder="Author" id="author" maxLength="30"
                    value={author} onChange={(e) => setAuthor(e.target.value)} required
                />
                <label htmlFor="isbn">ISBN</label>
                <input type="text" placeholder="ISBN" id="isbn" maxLength="30"
                    value={isbn} onChange={(e) => setISBN(e.target.value)} required
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default BookForm;