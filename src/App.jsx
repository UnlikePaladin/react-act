import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Initial from "./views/Initial";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';


function App() {
  const [isLogin, setIsLogin] = useState(false); // logged ins tate
   const login = async (user) => { // log in function
     // Fetch user
     const data = await fetch ("http://localhost:4000/login", {
       method:"POST", 
       headers:{"Content-Type":"application/json"}, 
       body: JSON.stringify(user)
     });
     const datos = await data.json();
     setIsLogin(datos.loggedIn);
     return datos.loggedIn;
   }; 
   const logout = () => {
     setIsLogin(false);
   };

  return (
    <>
    <BrowserRouter>
    {isLogin && <ResponsiveAppBar logout={logout} />}
    <Routes>
      <Route path="/" element={<Login login={login}/>} />
      <Route path="/home" element={isLogin ? <Initial /> : <Navigate to={"/"} />} />
      <Route path="/user/profile" element={isLogin ? <Profile /> : <Navigate to={"/"} />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
