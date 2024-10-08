import { faBolt, faTags, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              title="Quick and Easy"
              para="Get access to the book you purchased online instantly"
              icon={<FontAwesomeIcon icon={faBolt}/>}
            />
            <Highlight
              title="10,000+ Books"
              para="Library has books in all your favourite catagories"
              icon={<FontAwesomeIcon icon={faBookOpen}/>}
            />
            <Highlight
              title="Affordable"
              para="Get your hands on popular books for as little as 10$"
              icon={<FontAwesomeIcon icon={faTags}/>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;