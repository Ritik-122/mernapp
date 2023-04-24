import React from "react";

export default function Card() {
  return (
    <>
      <div
        className="card text-white bg-dark mb-3 mt-3"
        style={{ width: "18rem", maxHeight: "420px" }}
      >
    <img className="card-img-top" src="https://media.istockphoto.com/id/1374648044/photo/pizza-with-prosciutto-and-basil-served-on-round-wooden-board.jpg?b=1&s=170667a&w=0&k=20&c=sWKkGS0zTkhCrm5bT12SFX0Tx36ny0tyBk3fn854Mxo=" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}{" "}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </>
  );
}
