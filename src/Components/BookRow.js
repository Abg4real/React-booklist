import React, { useContext } from 'react';
import { BookContext } from './Contexts/BookContext';

const BookRow = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return (
        <tr key={book.id}>
            <th>{book.title}</th>
            <th>{book.author}</th>
            <th>{book.isbn}</th>
            <th className="underline" onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>Remove</th>
        </tr>
    );
}

export default BookRow;