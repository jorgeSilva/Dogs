import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import ProtectedRouter from "./Components/Helper/ProtectedRouter";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login/*" element={<Login/>}/>
            <ProtectedRouter path="conta/*" element={<User/>} />      
            <Route path="foto/:id" element={<Photo/>} />
          </Routes>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  ); 
}

export default App;
