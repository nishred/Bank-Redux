import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import store from './utils/store-v2.js'

import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)

// now every single component in our app can read data from the redux store and can dispatch 

//This is very similar to the context API. It is broadcasting global state so that every single component can read from it
