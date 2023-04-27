import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbarr from "../Components/Navbarr";
import Card from "../Components/Card";
export default function Home() {

  const [search,setSearch]=useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let res = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFoodCat(data[1]);
    setFoodItem(data[0]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: "#d0d1d2", color: "black" }}>
      <div>
        <Navbarr />
      </div>

      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride='carousel' style={{objectFit:"contain !important"}}>
     <div className="carousel-inner" id='carousel'>
  <div className='carousel-caption' style={{zIndex:'10'}}>
  <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      {/* <button className="btn btn-dark text-white" type="submit">Search</button> */}
    </div>

  </div>

 

    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1614287681681-592fe09d78a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>

      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div  className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem.filter(
                      (item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                    ).map(filterItems=>{
                      return(
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodName={filterItems.name}
                          options={filterItems.options[0]}
                          imgSrc={filterItems.img}

                          ></Card>
                        </div>
                      )
                    })
                  ) : (
                    <div>No Such Data</div>
                  )}
                </div>
              );
            })
          : ""}
        
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
