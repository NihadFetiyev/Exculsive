import { useEffect, useState } from "react"
import useLocalStorage from "./useLocalStorage"

const UseTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme")
  useEffect(() => {
    // localStorage.setItem("Theme", JSON.stringify(theme))
    theme ? document.body.classList.remove("dark") : document.body.classList.add("dark")
    // document.body.classList.toggle("dark",theme)
  }, [theme])

  // function ChangeTheme() {
  //   document.body.classList.toggle("dark")
  //   setTheme(!theme)
  // }
  function AddDarkTheme() {
    document.body.classList.add("dark")
    setTheme(!theme)
  }
  function RemoveDarkTheme() {
    document.body.classList.remove("dark")
    setTheme(!theme)
  }
  return [theme,AddDarkTheme,RemoveDarkTheme]
}

export default UseTheme
