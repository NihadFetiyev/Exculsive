import React, { createContext, useState } from 'react'

export const BasketContext = createContext();

function BasketProvider({children}) {

  let [basket,setBasket]= useState([])

  function AddToBasket(item) {
    const itemIndex = basket.findIndex(x=>x._id === item._id)
    if (itemIndex === -1) {
      setBasket([...basket,{...item,count:1}])
      return
    }
    basket[itemIndex].count++
    setBasket([...basket])
  }
  function RemoveFromBasket(item) {
    setBasket(basket.filter(x=>x._id !== item._id ))
  }


  const data = {basket,setBasket,AddToBasket,RemoveFromBasket}
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider