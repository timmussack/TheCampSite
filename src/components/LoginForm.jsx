import React from 'react'
import { useNavigate } from "react-router-dom";
import "../app.css";


const LoginForm = () => {

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email?.value;
    let password = e.target.elements.password?.value;

    console.log(email, password);

    navigate("/");
  };

	return(
		<div className="flex">
            <div className="max-w-xs rounded-2xl border border-primary drop-shadow-md py-10 px-16">
                <h1 className="text-2xl font-bold text-primary mt-4 mb-12 text-center">
                    Log in
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 text-primary border border-primary rounded-2xl outline-none text-sm mb-4"
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 text-primary border border-primary rounded-2xl outline-none text-sm mb-4"
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            className="py-2 px-4 text-sm text-primary rounded-2xl border border-primary"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
	)
}

export default LoginForm