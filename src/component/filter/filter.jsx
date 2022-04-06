import React,{useContext} from 'react'
import './filter.css'
import { ItemContextContainer } from '../context/itemcontext'
import Cuisinefilter from './cuisinefilter'
export default function Filter() {
    const {OnCostFilterClick} = useContext(ItemContextContainer)
  return (
    <div className='filter-container'>
        <center>Cost Filter</center>
                <div className='filter' onClick={OnCostFilterClick} >
                    <label >
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label >
                        <input type="radio" value="100-300" name="cuisine"/>100-300
                    </label>
                    <label >
                        <input type="radio" value="301-500" name="cuisine"/>301-500
                    </label>
                    <label >
                        <input type="radio" value="501-700" name="cuisine"/>501-700
                    </label>
                    <label >
                        <input type="radio" value="701-900" name="cuisine"/>701-900
                    </label>
                    <label >
                        <input type="radio" value="901-1500" name="cuisine"/>901-1500
                    </label>
                </div>

                <Cuisinefilter/>
    </div>
  )
}
