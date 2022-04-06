import React from 'react'
import { useContext } from 'react'
import { ItemContextContainer } from '../context/itemcontext'
export default function Cuisinefilter() {
    const {onCuisineFilterClick}=useContext(ItemContextContainer)
  return (
    <>
    <center>Cuisine Filter</center>
    <div className='cuisinefilter filter' onChange={onCuisineFilterClick}>
        <label className="radio">
            <input type="radio" value="" name="cuisine"/>All
        </label>
        <label className="radio">
            <input type="radio" value="1" name="cuisine"/>North Indian
        </label>
        <label className="radio">
            <input type="radio" value="2" name="cuisine"/>South Indian
        </label>
        <label className="radio">
            <input type="radio" value="3" name="cuisine"/>Chinese
        </label>
        <label className="radio">
            <input type="radio" value="4" name="cuisine"/>Fast Food
        </label>
        <label className="radio">
            <input type="radio" value="5" name="cuisine"/>Street Food
        </label>
    </div>
</>
  )
}
