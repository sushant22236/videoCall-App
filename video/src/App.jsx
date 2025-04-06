
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Video from './components/Video'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/room/:id",
      element: <Video></Video>
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
