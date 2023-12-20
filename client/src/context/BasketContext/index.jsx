import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/localStorage';

export const BasketContext = createContext();

function BasketProvider({ children }) {

  let [basket, setBasket] = useLocalStorage([])

  function AddToBasket(item) {
    const itemIndex = basket.findIndex(x => x._id === item._id)
    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }])
      return
    }
  }
  function RemoveFromBasket(item) {
    setBasket(basket.filter(x => x._id !== item._id))
  }
  function CheckCount(item) {
    return basket.find(x => x.id === item.id).count
  }

  function decreaseCount(item) {
    const itemIndex = basket.findIndex(x => x.id === item.id)
    if (basket[itemIndex].count === 1) {
      setBasket(basket.filter(x => x.id !== item.id))
      return
    }
    basket[itemIndex].count--
    setBasket([...basket])
  }


  // function increaseCount(item) {
  //   const itemIndex = basket.findIndex(x => x.id === item.id)
  //   if (basket[itemIndex].count === 1) {
  //     setBasket(basket.filter(x => x.id !== item.id))
  //   }
  //   basket[itemIndex].count++
  //   setBasket([...basket])
  // }


  const data = { basket, setBasket, AddToBasket, RemoveFromBasket, CheckCount, decreaseCount }
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider