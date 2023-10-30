import React from "react";

export default function Pagination({ pagination, onChangePage }) {
  const { _page, _limit, _totalRows } = pagination;
  const lastPage = Math.ceil(_totalRows / _limit);
  const handleChangePage = (newPage) => {
    if (onChangePage) {
      onChangePage(newPage);
    }
  };
  return (
    <div style={{ textAlign:"center", alignItems:"center"}}>
      <button className="btn btn-primary"
      disabled = {_page <= 1}
      onClick={()=> handleChangePage(_page - 1)}
      >Previous</button> 
      {_page}/{lastPage}
      <button className="btn btn-primary"
      disabled = {_page >= lastPage}
      onClick={()=> handleChangePage(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}
