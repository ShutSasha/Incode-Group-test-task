import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import Store from './app/store/store'
import './app/styles/main.scss'

interface State {
   store: Store
}

const store = new Store()

export const Context = createContext<State>({
   store,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Context.Provider value={{ store }}>
         <App />
      </Context.Provider>
   </React.StrictMode>,
)
