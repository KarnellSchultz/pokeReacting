import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage,  }) {
  return (
    <div>

      <button className="btn btn-success" onClick={gotoPrevPage}>
        Back -
      </button>
      <button className="btn btn-danger" onClick={gotoNextPage}>
        Next +
      </button>
    </div>
  );
}
