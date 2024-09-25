import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const param = useParams();
  const currentBook = books.find((book) => +book.id === +param.id);

  function bookExistInCart() {
    // this is saying that is the book we are attempting to add has the same id as a book that --
    // is in the cart,  then return true. Ternary oporator then prints "checkout" as its returns true
    return cart.find((book) => +book.id === +currentBook.id);
  }

  function addBookToCart(book) {
    addToCart(book);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link to="/books" className="book__selected--title--top">
                Books
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={currentBook.url}
                  alt=""
                  className="book__selected--img"
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{currentBook.title}</h2>
                <Rating rating={currentBook.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={currentBook.originalPrice}
                    salePrice={currentBook.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    amet sed, iure sunt quod voluptatem facere perferendis
                    nesciunt et, quasi dolor libero optio veritatis unde
                    repellendus mollitia eaque harum cumque.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    amet sed, iure sunt quod voluptatem facere perferendis
                    nesciunt et.
                  </p>
                  {bookExistInCart() ? (
                    <>
                      <Link to="/cart">
                        <button className="btn">Checkout</button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn"
                        onClick={() => addBookToCart(currentBook)}
                      >
                        Add to cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +param.id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
