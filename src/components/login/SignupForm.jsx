import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email?.value;
    const password = e.target.elements.password?.value;

    console.log('email:', email, 'password:', password);

    navigate('/');
  };

  return (
    <div className="flex">
      <div className="max-w-xs rounded-2xl border border-primary drop-shadow-md py-10 px-16">
        <h1 className="text-2xl font-bold text-primary mt-4 mb-12 text-center">
          Sign up
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                className="w-full p-2 text-primary border border-primary rounded-2xl outline-none text-sm mb-4"
                id="email"
                placeholder="Your Email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="w-full p-2 text-primary border border-primary rounded-2xl outline-none text-sm mb-4"
                id="password"
                placeholder="Your Password"
              />
            </label>
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              type="submit"
              className="py-2 px-4 text-sm text-primary rounded-2xl border border-primary"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
