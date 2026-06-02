import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.fixed.jsx'
import { NotificationProvider } from './components/ui/NotificationProvider'
import NotificationBar from './components/ui/NotificationBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationProvider>
      <NotificationBar />
      <App />
    </NotificationProvider>
  </React.StrictMode>,
)
