import { ALL_MOVIES, API_GET_ALL_MOVIES } from "../Types/MovieType";
import axios from "axios";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(API_GET_ALL_MOVIES);
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar&query=${word}`
    );
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=930d1425f0d4cfde946e81f0ce829c02&language=ar-US&page=${page}`
    );
    dispatch({
      type: ALL_MOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
