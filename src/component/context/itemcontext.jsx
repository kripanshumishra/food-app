import React from 'react'
import { useEffect,useState,createContext } from 'react';
export const  ItemContextContainer = createContext();
export default  ( { children,mealId } ) =>{
    const [Item, SetItem] = useState({});
    // let url = 'https://the-one-api.herokuapp.com/v1/character';
    useEffect(() => {
      console.log(mealId,">>><<<<")
        // fetch(`https://novzomatoapi.herokuapp.com/restaurants?mealid=${mealId}`)
        
        fetch(`https://novzomatoapi.herokuapp.com/filter/${mealId}?mealid=${mealId}`)
          .then((data) => data.json())
          .then((data) => {
            // console.log(data);
            return SetItem(data);
          });
      }, []);
       
    const OnCostFilterClick=(e)=>{
      // console.log(mealId)
      // console.log(children)
        let value = e.target.value;
        let hcost = Number(value.split("-")[1])
        let lcost = Number(value.split("-")[0])
        // console.log(value)
         fetch(`https://novzomatoapi.herokuapp.com/filter/${mealId}?hcost=${hcost}&lcost=${lcost}&`)
         .then((data) => data.json())
          .then((data) => {
            // console.log(data,"pppppp");
            SetItem(data);
          })
    }
    const onCuisineFilterClick = (e)=>{
      let val = e.target.value;
      console.log(`https://novzomatoapi.herokuapp.com/filter/${mealId}?cuisine=${val}`)
      fetch(`https://novzomatoapi.herokuapp.com/filter/${mealId}?cuisine=${val}`)
      .then(data => data.json())
      .then(data=>{
        console.log(data)
        SetItem(data)})
    
    }
    return (
        <ItemContextContainer.Provider value={{Item,SetItem,OnCostFilterClick,mealId,onCuisineFilterClick}}>{children}</ItemContextContainer.Provider>
      );
}
