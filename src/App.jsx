import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Initial from "./views/Initial";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
    <Route path='/' element={<Login />}/>
      <Route path='/home' element={<Initial />}/>
      <Route path='/user/profile' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
