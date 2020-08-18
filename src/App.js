import React from 'react';
import Navbar from './Components/Navbar';
import BookForm from './Components/BookForm';
import BookContextProvider from './Components/Contexts/BookContext';
import BookTable from './Components/BookTable';


function App() {
  return (
    <main>
      <Navbar />
      <BookContextProvider>
        <BookForm />
        <BookTable />
      </BookContextProvider>
    </main>
  );
}

export default App;
