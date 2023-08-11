import React from "react";
import { IBook } from "../types";

interface BookProps {
  book: IBook;
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="book__card card">
      <div className="card__image">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="card__body">
        <div className="card__categories">
          <span>{book.categories == undefined ? "" : book.categories[0]}</span>
        </div>
        <h6 className="card__title">{book.title}</h6>
        <div className="card__authors">
          {book.authors == undefined
            ? ""
            : book.authors.map((author, index) => (
                <span key={index}>{(index ? ", " : "") + author}</span>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
