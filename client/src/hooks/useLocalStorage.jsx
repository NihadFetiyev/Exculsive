import { useEffect, useState } from "react"

function useLocalStorage(key) {

  const [local , setLocal] = useState( localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [] )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(local))
  }, [local])

  return [local, setLocal]
}

export default useLocalStorage