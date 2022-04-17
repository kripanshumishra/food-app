import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../Header/navbar";
import "./cartDisplay.css";
export default function CartDisplay() {
  const navigate=useNavigate()
  const menu =[ ...JSON.parse(localStorage.getItem("cart"))];
  const [cartMenu, SetCartMenu] = useState(menu);
  const removeToCart = (e, event) => {
    let newCart = [...cartMenu];
    newCart = newCart.reduce((acc, curr) => {
      if (curr.menu_id !== e.menu_id) {
        acc.push(curr);
      }
      return acc;
    }, []);
    SetCartMenu(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  let totalCartPrice = cartMenu ? cartMenu.reduce((acc,curr)=> acc+(Number(curr.menu_price)*curr.qty) , 0) :0;
  // const handdleSubmit = ()=>{
  //   fetch('')
  // }
  return (
    <>
    <Navbar/>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartMenu.map((e) => {
            return (
              <div className="cartitem" key={e.menu_id}>
                <div className="cartitem__image">
                  <img src={e.menu_image} alt={e.menu_name} />
                </div>
                <Link
                  to={`/detail/${e.restaurant_id}`}
                  className="cartItem__name"
                >
                  <p>{e.menu_name}</p>
                  {/* <p>rating: {parseFloat(Math.random()*5).toFixed(1)} </p> */}
                  <p>rating: {4.3} </p>
                </Link>
                
                <p className="cartitem__price"> &#x20B9; {e.menu_price}</p>
                <div style={{display:"flex", width:"95px"}}>
                  <button 
                  onClick={(event)=>{
                    const priceUpdater= cartMenu.map(x=>{
                      if(x._id===e._id){
                        // console.log("came inside")
                        let qty= (x.qty)?x.qty+=1:x.qty=1
                        return {...x, qty:qty}
                      }
                      return x
                    })
                    SetCartMenu(priceUpdater)
                }}                  
                  style={{width:"30px"}}>+</button>
                  <p style={{width:"30px",textAlign:"center",marginTop:"7px"}}>
                    {
                   cartMenu.filter((x)=>{
                      return x._id===e._id
                    })[0].qty
                    }
                    </p>
                  <button style={{width:"30px"}}
                  onClick={(event)=>{
                      const priceUpdater= cartMenu.map(x=>{
                        if(x._id===e._id){
                          let qty =(x.qty&& x.qty>1)?x.qty-=1:x.qty=1
                          console.log(qty,">>")
                          return {...x, qty:qty}
                        }
                        return x
                      })
                      SetCartMenu(priceUpdater)
                      // console.log(priceUpdater,">>>>>>>>>>")
                  }}
                  >-</button>
                </div>
                <button
                  disabled={
                    cartMenu.filter((a) => a.menu_id === e.menu_id).length <= 0
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
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal {cartMenu.length} items</p>
            <p className="ms-3 fs-2 text-danger">&#x20B9; {
              totalCartPrice
            }</p>
          </div>
          <div>
            <button onClick={()=>{
              navigate('/payment' ,{state:totalCartPrice} )
            }}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}