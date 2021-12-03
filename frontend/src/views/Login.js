import React from 'react';
import Footer from '../componentesAntonio/Footer';
import Navbar from '../componentesAntonio/Navbar';
import UserLogIn from '../componentesAntonio/UserLogIn';



function Login() {
  return (
    <>
    <Navbar />
    <div className="container">
    <UserLogIn />
    </div>
    <Footer/>
    </>
  );
}

export default Login;