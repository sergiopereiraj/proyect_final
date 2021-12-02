import React from 'react';
import './App.css';
import UserLogIn from './Componentes/UserLogIn';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer  from './Componentes/Footer';
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from './Componentes/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
    <UserLogIn />
    </div>
    <Footer />
    </>
  );
}

export default App;
