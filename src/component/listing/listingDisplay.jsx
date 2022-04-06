import React from 'react'
import Listing from './listing.jsx'
import{useParams} from 'react-router-dom'
import Filter from '../filter/filter.jsx'
import Navbar from '../Header/navbar.jsx'
import './listing.css'
import Itemcontext from "../context/itemcontext"
export default function ListingDisplay() {
    let params = useParams();
  return (  
    <Itemcontext mealId={params.mealId}>
    <Navbar/>
      <div className='row'>
        <div className='col-3 '>
          <Filter/>
        </div>
        <div className='col-9 '>
            <Listing />
        </div>
    </div>
    </Itemcontext>
    
   
  )
}