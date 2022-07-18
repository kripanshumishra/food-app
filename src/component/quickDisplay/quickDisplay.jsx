import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './quickDisplay.css'
const Qurl = "https://novzomatoapi.herokuapp.com/mealType";

export default function QuickDisplay() {
  const [mealType, SetMealType] = useState([]);
  useEffect(() => {
    fetch(Qurl,{method:"GET"})
      .then((data) => data.json())
      .then((data) => SetMealType(data));
  }, []);
  
  const mealItems =mealType.map((e) => {
    return (
    <Link to={`/listing/${e.mealtype_id}`} className="cart" key={e.mealtype_id}>
      <div className="card">
        <div>
          <img
            src= {e.meal_image}
            className="card-img-top img-thumbnail"
            alt="..."
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{e.mealtype} </h5>
          <p className="card-text">
          {e.content}
          </p>
        </div>
      </div>
    </Link>
    )
  })
  return (
    <>
      <div className="container">
        <p className="h2 fw-bolder mt-5">Quick Display</p>
        <p className="h5">Find Restaurants By MealType</p>
          <div className="quickSearch-grid">
          {mealItems.length?mealItems:<h2 className="mt-3">please wait a moment.... </h2>}
          </div>
        </div>
    </>
  );
}
