import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import MyProvider from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </React.StrictMode>,
)
