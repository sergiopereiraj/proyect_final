import React from 'react';
import Footer from '../component/footer';
import Navs from '../component/navs';
import UserLogIn from '../componentesAntonio/UserLogIn';



function Login() {
  return (
    <>
    <Navs />
    <div className="container">
    <UserLogIn />
    </div>
    <Footer/>
    </>
  );
}

export default Login;