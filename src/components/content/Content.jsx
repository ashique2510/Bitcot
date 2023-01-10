import React, { useEffect, useState } from "react";
import "./Content.css";
import placeHolder from "../../assets/placeholder.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import Loading from "../../tools/loading/Loading";
import Errors from "../../tools/error/Errors";

const Content = ({ home }) => {
  const {
    setSeries,
    setMovies,
    setHome,
    data,
    series,
    movies,
    isLoading,
    error,
  } = useStateContext();

  const navigate = useNavigate();
  let [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleMovies = () => {
    setSeries(false);
    setHome(false);
    setMovies(true);
    navigate("/movies");
  };

  const handleSeries = () => {
    setHome(false);
    setMovies(false);
    setSeries(true);
    navigate("/series");
  };

  useEffect(() => {
    if (data !== null) {
      setAllData(data.entries);
    }
  }, [series, movies]);

  useEffect(() => {
    allData = allData.filter((item) => item.releaseYear >= 2010);
    allData.sort((a, b) => a.title.localeCompare(b.title));

    if (movies) {
      allData = allData.filter((item) => item.programType === "movie");
    } else if (series) {
      allData = allData.filter((item) => item.programType === "series");
    }
    allData = allData.slice(0, 21);

    setFilteredData(allData);
  }, [allData]);

  return (
    <div>
      <main>
        <div className="container">
          {home && !isLoading && !error && (
            <>
              <div onClick={handleSeries} className="tiles-section">
                <div className="tiles">
                  <h2>SERIES</h2>
                  <img src={placeHolder} alt="placeHolder" />
                </div>

                <div className="tag">
                  <p>Popular Series</p>
                </div>
              </div>

              <div onClick={handleMovies} className="tiles-section">
                <div className="tiles">
                  <h2>MOVIES</h2>
                  <img src={placeHolder} alt="placeHolder" />
                </div>
                <div className="tag">
                  <p>Popular Movies</p>
                </div>
              </div>
            </>
          )}

          {filteredData &&
            !isLoading &&
            !error &&
            filteredData.map((item) => {
              return (
                <div className="tiles-section">
                  <div className="poster">
                    <img
                      src="https://alternativemovieposters.com/wp-content/uploads/2020/04/colm_wolfcreek.jpg"
                      alt="placeHolder"
                    />
                  </div>
                  <div className="tag">
                    <span>{item.releaseYear}</span>
                    <br />
                    <span>{item.title.substring(0, 13)}</span>
                  </div>
                </div>
              );
            })}

          {isLoading ? (
            <Loading />
          ) : error ? (
            <Errors error={error.message} />
          ) : (
            ""
          )}
        </div>
      </main>
    </div>
  );
};

export default Content;
