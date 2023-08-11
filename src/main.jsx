import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

//import { store } from './store/index.js'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import TodoApp from './TodoApp'
//import { PokemonApp } from './PokemonApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    {/* <PokemonApp/> */}
    <TodoApp/>
    </Provider>
  </React.StrictMode>,
)
