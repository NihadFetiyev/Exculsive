import React, { createContext } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'

export const wishlistContext = createContext()

const WishlistProvider = ({ children }) => {

    let [wish, setWish] = useLocalStorage([])

    // let wishCount = wish.length;
    
    //add to wishlist
    function addTOWish(item) {
        const itemIndex = wish.findIndex(x => x._id === item._id)
        if (itemIndex === -1) {
            setWish([...wish, { ...item, count: 1 }])
            return
        }

        setWish(wish.filter(x => x._id !== item._id))
    }

    //delete from wishlist
    function deleteFromWish(item) {
        setWish(wish.filter(x => x._id !== item._id))
    }

    const data = { wish, setWish, addTOWish, deleteFromWish }
    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistProvider
