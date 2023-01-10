import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = ({ home, movies, series }) => {
  const [titles, setTitles] = useState("");

  useEffect(() => {
    if (home) {
      setTitles("Popular Titles");
    } else if (movies) {
      setTitles("Popular Movies");
    } else if (series) {
      setTitles("Popular Series");
    }
  }, [home, movies, series]);

  return (
    <div>
      <header>
        <div className="container">
          <div className="section-one">
            <h1>VIDEO Streaming</h1>

            <nav>
              <a href="/">Home</a>
              <a href="#">Login</a>
              <button>Start your free trial</button>
            </nav>
          </div>

          <div className="section-two">
            <h2> {titles} </h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
