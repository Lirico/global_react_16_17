import { useState } from "react";


const BooksList = () => {

  const [books, setBooks] = useState(() => [
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
    },
    {
      title: "El Principito",
      author: "Antoine de Saint-Exupery",
    },
  ]);

  const addTrader = () =>
    setBooks((books) => {
      return [
        ...books,
        {
          title: "El trader disciplinado",
          author: "Mark Douglas",
        },
      ];
    });
  const addSherlock = () =>
    setBooks((books) => {
      return [
        ...books,
        {
          title: "Las Aventuras de Sherlock Holmes",
          author: "Conan Doyle",
        },
      ];
    });

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
          </li>
        ))}
      </ul>
      <div className="card">
        <h4>El Trader Disciplinado</h4>
        <button onClick={addTrader}>Agregar</button>
      </div>
      <div className="card">
        <h4>Las Aventuras de Sherlock Holmes</h4>
        <button onClick={addSherlock}>Agregar</button>
      </div>
    </div>
  );
};

export default BooksList;
