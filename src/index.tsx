import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { GlobalStyle } from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   //<React.StrictMode>
   <React.Fragment>
      <GlobalStyle />
      <App />
   </React.Fragment>
   //</React.StrictMode>
)
reportWebVitals()
