import React from "react";

export default function Card(props) {
 
  let options=props.options;
  let priceOptions=Object.keys(options);
 
  return (
    <>
      <div
        className="card text-white bg-dark mb-3 mt-3"
        style={{ width: "18rem", maxHeight: "420px" }}
      >
    <img className="card-img-top" src={props.imgSrc} height='200px'  />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">
            Best in town
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
            <select className="m-1 h-100  bg rounded">
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}  
              
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </>
  );
}
