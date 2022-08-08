import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

import { getAllMovie } from "../Redux/Actions/MovieActions";

import Pagination from "./Pagination";
import Post from "./Post";

const PostContent = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovie());
  }, []);
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <section className="post-content">
      <div className="row">
        {movies.length >= 1 ? (
          movies.map((itemMovie) => {
            return <Post key={itemMovie.id} itemMovie={itemMovie} />;
          })
        ) : (
          <h3 className="no-item text-center">لا يوجد افلام</h3>
        )}
        {movies.length >= 1 ? <Pagination /> : null}
      </div>
    </section>
  );
};

export default PostContent;
