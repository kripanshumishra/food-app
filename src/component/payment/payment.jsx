import React from 'react'
import Header from '../Header/navbar.jsx'
import { useState,useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
export default function Payment() {
    const location = useLocation()
    const [userInfo,setUserInfo]=useState({})
    const user = JSON.parse(sessionStorage.getItem('user'))
    // console.log("user",user)
    useEffect(() => {
        let prev = userInfo?userInfo:{};
        setUserInfo(
             
            {...prev,
                price:(location.state),
                name:user?user.name : "",
                email:user?user.email : "",
                phone:user?user.phone : ""
            }
        )
    
      
    }, [])
    if(sessionStorage.getItem('isLogin') && sessionStorage.getItem('isLogin') === 'true'  ){
        return(
            <>
            <Header/>
            <div className="app-form-outer-container justify-content-start">
                <hr/>
                <div className="login-form panel panel-primary">
                    <div className="panel-heading">
                        <h3>Your Order from Restaurant  </h3>
                    </div>
                    <div className="panel-body">
                        <form action="https://developerpayment.herokuapp.com/paynow" method="POST">
                            <input type="hidden" name="cost" value={userInfo.price}/>
                            <input type="hidden" name="id" value={Math.floor((Math.random() * 100000) + 1)}/>
                            <input type="hidden" name="hotel_name" value={ "the royal arc" }/>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label for="fname">Name</label>
                                    <input id="fname" name="name" className="form-control"
                                    value={ userInfo.name } />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input id="email" name="email" className="form-control"
                                    value={userInfo.email}
                                      />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input id="phone" name="phone" className="form-control"
                                    value={userInfo.phone?userInfo.user.phone:6895959595} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="address">Address</label>
                                    <input id="address" name="address" className="form-control"
                                    />
                                </div>
                            </div>
                            <button className=" submit-btn btn " 
                            type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
            

        )
    }
    // console.log(this.state)
    // if user is login
   
    
    return(
        <>
                <Header/>
                <center>
                    <h1>Login First To Place Order</h1>
                    <nav >
                        <NavLink style={{ fontSize:"25px" }} to="/login">click here to login</NavLink>
                    </nav>
                </center>
            </>
    )
  
}
