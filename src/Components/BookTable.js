import React, { useContext } from 'react';
import { BookContext } from './Contexts/BookContext';
import BookRow from './BookRow';

const BookTable = () => {
    const { books } = useContext(BookContext);
    console.log(typeof (books));
    return books.length ? (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody id="booklist">
                    {books.map((book) => {
                        return (
                            <BookRow book={book} key={book.id} />
                        );
                    })}
                </tbody>
            </table>
        </div>
    ) : (
            <h2>No books to show!</h2>
        )
}

export default BookTable;