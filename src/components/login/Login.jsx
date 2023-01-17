import React from 'react';
import TitleLogo from '../header/TitleLogo.jsx';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignupForm.jsx';

function Login() {
  return (
    <div className="flex flex-col font-primary w-full min-h-screen p-2">

      <div className="border-y-2 border-pop py-3 flex flex-wrap flex-row justify-around items-center">
        <TitleLogo />
      </div>

      <div className="flex flex-col mt-5 justify-center items-center space-x-5 desktop:flex-row desktop:h-[calc(100vh-110px)]">
        <LoginForm />
        <p className="text-2xl my-5">or</p>
        <SignUpForm />
      </div>

    </div>
  );
}

export default Login;
