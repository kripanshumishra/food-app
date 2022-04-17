import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Header/Home.jsx";
import ListingDisplay from "./component/listing/listingDisplay.jsx";
import Detail from "./component/detail/detail.jsx";
// import CartDisplay from './component/cart/cartDisplay.jsx'
import CartDisplay from './component/cart/cartDisplay.jsx'
import Login from "./component/Login/login.jsx";
import Signup from "./component/signup/signup.jsx";
import Payment from "./component/payment/payment";
import ViewBooking from "./component/viewbooking/viewBooking";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:mealId" element={<ListingDisplay />} />
        <Route path="/detail/:resId" element={<Detail />} />
        <Route path="/product/cart" element={<CartDisplay/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/viewBooking" element={<ViewBooking/>}/>
        {/* <Route element={<Protected/>} >
          <Route path='/fake' element={<Fake/>} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
