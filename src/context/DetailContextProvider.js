import React, {useState} from 'react'

const Context = React.createContext({})

export function DetailContextProvider ({children}) {
  
  const [id, setId] = useState('')
  const [display, setDisplay] =useState('none')

  return <Context.Provider value={{id, setId, display, setDisplay}}>
    {children}
  </Context.Provider>
}

export default Context