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
import UserProfile from "./Components/User/UserProfile/UserProfile";
import NotFound from "./Components/PageNotFound/NotFound";

const App = () => {
  return (
    <div className="App">  
      <BrowserRouter>
        <UserStorage>
          <Header/>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="login/*" element={<Login/>}/>
              <Route path="conta/*" element={
                <ProtectedRouter>
                  <User/>   
                </ProtectedRouter>
              }/>      
              <Route path="foto/:id" element={<Photo/>} />
              <Route path="perfil/:user" element={<UserProfile/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>  
  ); 
}

export default App;
