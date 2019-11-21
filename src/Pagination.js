import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage, ID }) {
  return (
    <>
      <div className="btn-group">
        { ID === 1 
        ? (
          <button className="btn btn-success disabled">Back -</button>) 
        : (
          <button className="btn btn-success" onClick={gotoPrevPage}>
            Back -
          </button>
        )}
        <button className="btn btn-danger" onClick={gotoNextPage}>
          Next +
        </button>
      </div>
    </>
  );
}
