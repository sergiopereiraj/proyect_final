import React from 'react';
import './App.css';
import Login from './Componentes/Login';
import UserLogIn from './Componentes/UserLogIn';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer  from './Componentes/Footer';


function App() {
  return (
    <>
    <Login />
    <div className="container">
    <UserLogIn />
    </div>
    <Footer />
    </>
  );
}

export default App;
