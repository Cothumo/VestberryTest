import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'ThemeContext'
// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    MOUNT_NODE
  )
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
