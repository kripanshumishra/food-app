import React from "react";
import "./resMenu.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function ResMenu({ resId }) {
  const url = "https://novzomatoapi.herokuapp.com/menu/";
  const navigate = useNavigate();
  const [resMenu, SetResMenu] = useState();
  const [cart, setCart] = useState([]);
  const addToCart = async (e, event) => {
    const newCart = [...cart];
    newCart.push(e);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const removeToCart = (e, event) => {
    let newCart = [...cart];
    newCart = newCart.reduce((acc, curr) => {
      if (curr.menu_id !== e.menu_id) {
        acc.push(curr);
      }
      return acc;
    }, []);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  useEffect(() => {
    fetch(`${url}${resId}`)
      .then((data) => data.json())
      .then((data) => {
        data =data.map(x=>{
          let qty = 1
          return {...x,qty}
          
        })
        SetResMenu(data);
        // console.log(data,"^^^^^^^^^^^^^^")
      });
  }, []);

  if (resMenu && resMenu.length > 0) {
    return (
      <>
        <button
          disabled={
            cart.length <= 0
              ? true
              : false
          }
          className="mt-4 mb-3 cartItem__select proceed__btn"
          onClick={() => navigate("/product/cart")}
        >
          proceed to cart{" "}
        </button>
        {resMenu.map((e) => {
          return (
            
              <div className="cartitem" key={e.menu_id}>
                <div className="cartitem__image">
                  <img src={e.menu_image} alt={e.menu_name} />
                </div>
              <Link to={`/detail/${e.restaurant_id}`} className="cartItem__name">
                  <p>{e.menu_name}</p>
                </Link>
                <p className="cartitem__price"> &#x20B9; {e.menu_price}</p>
                <button
                  disabled={
                    cart.filter((a) => a.menu_id === e.menu_id).length > 0
                      ? true
                      : false
                  }
                  className={`cartItem__select`}
                  onClick={(event) => {
                    addToCart(e, event);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  disabled={
                    cart.filter((a) => a.menu_id === e.menu_id).length <= 0
                      ? true
                      : false
                  }
                  className="cartItem__deleteBtn"
                  onClick={(event) => removeToCart(e, event)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            
          );
        })}
      </>
    );
  } else {
    return <p>pls wait</p>;
  }
}
