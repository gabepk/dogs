import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login/*" element={<Login />}></Route>
              <ProtectedRoute
                path="/account/*"
                element={<User />}
              ></ProtectedRoute>
              <Route path="photo/:id" element={<Photo />}></Route>
              <Route path="profile/:user" element={<UserProfile />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </HashRouter>
    </div>
  );
};

export default App;
