import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { GlobalProvider } from './context/globalContext'
import './styles/App.scss'

render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
