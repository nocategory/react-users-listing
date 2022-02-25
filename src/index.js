import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Index from './pages/Index'
import Root from './Root'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root>
        <Index />
      </Root>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
