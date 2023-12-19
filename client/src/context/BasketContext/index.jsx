import React, { createContext, useState } from 'react'

export const BasketContext = createContext();

function BasketProvider({children}) {

  const [basket,setBasket]= useState([])

  function AddToBasket(item) {
    const itemIndex = basket.findIndex(x=>x.id === item.id)
    if (itemIndex === -1) {
      setBasket([...basket,{...item,count:1}])
      return
    }
    basket[itemIndex].count++
    setBasket([...basket])
  }


  const data = {basket,setBasket,AddToBasket}
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider