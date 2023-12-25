import { useEffect, useState } from "react"

function useLocalStorageForUSer(key,initVal) {

  const [local , setLocal] = useState( localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initVal )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(local))
  }, [local,key])

  return [local, setLocal]
}

export default useLocalStorageForUSer