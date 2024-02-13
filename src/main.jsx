import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './Components/Context/AppContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pomodoro from './Components/Pages/Pomodoro.jsx'
import ShortBreak from './Components/Pages/ShortBreak.jsx'
import LongBreak from './Components/Pages/LongBreak.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        index : true,
        element : <Pomodoro/>
      },
      {
        path : 'pomodoro',
        element : <Pomodoro/>
      },
      {
        path : 'ShortBreak',
        element : <ShortBreak/>
      },
      {
        path : 'LongBreak',
        element : <LongBreak/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router}/>
    </AppContextProvider>
  </React.StrictMode>,
)
