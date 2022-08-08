import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../Redux/Actions/MovieActions";


const Pagination = () => {
  const [pageCountNum, setPageCountNum] = useState(0);
  const dispatch = useDispatch();
  const dataPages = useSelector((state) => state.pageCount);
  useEffect( () => {
    setPageCountNum(dataPages);
  }, [] )
  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };
  return (
    <ReactPaginate
      breakLabel="......."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      containerClassName="react-paginate-btn"
      pageCount={pageCountNum}
      previousLabel="< السابق"
      activeClassName="active"
    />
  );
};

export default Pagination;
