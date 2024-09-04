import { books } from "../data";
import React from "react";
import Book from "./ui/Book";

function Discounted() {
  console.log();

  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discount <span className="purple">Books</span>
          </h2>
          <div className="books">
            {/* {books
              .filter((book) => book.salePrice)
              .slice(0, 4)
              .map((book) => ( books.filter(book => book.salePrice > 0)
                <Book book={book} />
              ))} */}
            {/* {
               books.filter(book => book.salePrice)
                .map((book) => (<Book book={book}/>))
            } */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
