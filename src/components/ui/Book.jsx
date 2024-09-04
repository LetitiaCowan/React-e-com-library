import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Book({ book }) {
  return (
    <div className="book">
      <a href="">
        <figure className="book__ing--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {new Array(book.rating).fill(0).map((_ , index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          "$" + book.originalPrice.toFixed(2)
        )}
      </div>
    </div>
  );
}

export default Book;
