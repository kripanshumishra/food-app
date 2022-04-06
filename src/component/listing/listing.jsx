import React from "react";
import "./listing.css";
import { Link } from "react-router-dom";
import { useState, useEffect,useContext} from "react";
import {ItemContextContainer} from '../context/itemcontext'
// import {Itemcontext} from '../context/itemcontext'
export default function Listing({mealId}) {
  // const [item, SetItem] = useState("");
  // useEffect(() => {
  //   fetch(`https://novzomatoapi.herokuapp.com/restaurants?mealid=${mealId}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       return SetItem(data);
  //     });
  // }, []);

  // const [item,setItem]= useState(useContext(ItemContextContainer).Item)
  const item = useContext(ItemContextContainer).Item
//   console.log(item,">>>>>>")
 
  
  if (item && item.length > 0) {
    return (
      <>
        {
            item.map(item=>{
                return(
                    <div className="item" key={item.restaurant_id}>
                    <div className="row">
                        <div className="col-md-5">
                            <img src={item.restaurant_thumb} className="Image"
                            alt={item.restaurant_name}/>
                        </div>
                        <div className="col-md-7">
                            <div className="hotel_name">
                                <Link to={`/detail/${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                <div className="city_name">{item.address}</div>
                                <div className="city_name">{item.rating}</div>
                                <div className="city_name">Rs. {item.cost}</div>
                                <div className="badgeDiv">
                                    <span className="badge bg-secondary">
                                        {item.mealTypes[0].mealtype_name}
                                    </span>&nbsp;
                                    <span className="badge bg-success">
                                        {item.mealTypes[1].mealtype_name}
                                    </span>
                                </div>
                                <div className="badgeDiv">
                                    <span className="badge bg-warning">
                                        {item.cuisines[0].cuisine_name}
                                    </span>&nbsp;
                                    <span className="badge bg-darkbadge bg-dark">
                                        {item.cuisines[1].cuisine_name}
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                    
                )
            })
        }
      </>
    );
  } else {
    return <h1>pls wait while we are loading</h1>;
  }
}
