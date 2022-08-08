import React from "react";
import { useDispatch } from "react-redux";
import { getAllMovie, getMovieSearch } from "../Redux/Actions/MovieActions";

import { FaSearch } from "react-icons/fa";
import NavLogo from "./../img/logo.png";

const Navbar = () => {
  // To Search By Word
  const onSearch = (word) => {
    searchWord(word);
  };

  // To Make preventDefault During Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  // Get All Search Word By Axios
  const searchWord = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#">
          <img className="img-fluid logo-img" src={NavLogo} alt="Logo" />
        </a>
        <form
          onSubmit={handleSubmit}
          className="d-flex navbar-form"
          role="search"
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button className="btn-search" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
