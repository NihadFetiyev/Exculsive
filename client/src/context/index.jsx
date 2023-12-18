import { createContext, useContext, useEffect, useState } from "react"

const PositionContext = createContext()

export const PositionProvider = ({children})=> {

  const [display, setDisplay] = useState('none')
  const [position, setPosition] = useState('-300px')

  useEffect(()=> position === '-300px' ? handleDisplay('none') : handleDisplay('flex'),[position] )

  function handleDisplay(state){
    if (state === 'none') {
      setTimeout(()=>setDisplay(state),400)
      return
    }
    setDisplay(state)
  }

    const data={
      position,
      setPosition,
      display,
      setDisplay
    }

  return (
    <PositionContext.Provider value={data}>
      {children}
    </PositionContext.Provider>
  )
}

export const usePosition=()=>useContext(PositionContext)


