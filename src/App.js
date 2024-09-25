import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";
function App() {
  const [cart, setCart] = useState([]);

  function addToCart(currentBook) {
   setCart([...cart, {...currentBook, quantity: 1}])
  }

  function removeItem(currentBook) {
    console.log(currentBook)
    setCart(cart.filter((item) => item.id !== currentBook.id))
  }

 function numberOfItems() {
  let counter = 0;
  cart.forEach(item => {
    counter = counter + item.quantity
  })
  return counter
}

  function changeQuantity(currentBook, quantity) {
    setCart(cart.map(item => {
      return item.id === currentBook.id 
      ? {
        ...item, 
        quantity: +quantity
      } 
      : item
    }))
  }
 


  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo cart={cart} addToCart={addToCart} books={books} />}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





// function addToCart(currentBook) {
//   // finding out if the current book we are adding has the same ID as any other
//   // book in the cart (checking to see if its the same book)
//   const dupeItem = cart.find((item) => +item.id === +currentBook.id);


//   if (dupeItem) { //if there is a item in the cart with the same ID as what i am trying to add (same book)
//     setCart(cart.map(item => { 
//       if (item.id === dupeItem.id) { //then map through the cart and find the item that matches
//         return { // return everything thats in the item (id, prices, title etc) and add the quantity + 1
//           ...item,
//           quantity: item.quantity + 1
//         }
//       } else {
//         return item
//       }
//     }))
//   } else { // ensuring the default state after adding the first time has a quantity of 1
//     setCart([...cart, {...currentBook, quantity: 1}])
//   }