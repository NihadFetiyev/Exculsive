import React, { createContext } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export const BasketContext = createContext();

function BasketProvider({ children }) {


  let [basket, setBasket] = useLocalStorage([])

  let productCount = basket.length

  //add to basket
  function AddToBasket(item) {
    const itemIndex = basket.findIndex(x => x._id === item._id)
    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }])
      return
    }
  }
  //remove from basket
  function RemoveFromBasket(item) {
    setBasket(basket.filter(x => x._id !== item._id))
  }

  //Count
  function CheckCount(item) {
    return basket.find(x => x._id === item._id).count
  }

  //decrease count
  function decreaseCount(item) {
    const findedProduct = basket.find(x => x._id === item._id)
    if (findedProduct) {
      if (findedProduct.count === 1) {
        setBasket(basket.filter(x => x._id !== item._id))
        return
      }
      findedProduct.count--
      setBasket([...basket])
    }
  }
  //increase count
  function increaseCount(item) {
    const findedProduct = basket.find(x => x._id === item._id)
    console.log(findedProduct);
    if (findedProduct.count < 10) {
      findedProduct.count++
      setBasket([...basket])
    }
  }

  const data = { basket, setBasket, AddToBasket, RemoveFromBasket, CheckCount, decreaseCount, increaseCount,productCount }
  return (
    <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider