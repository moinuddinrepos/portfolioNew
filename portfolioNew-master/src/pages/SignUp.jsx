import React, { useState } from 'react';

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  const toggleForm = () => setIsSignup(!isSignup);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={toggleModal}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90"
      >
        Open {isSignup ? 'Signup' : 'Login'}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-primary">
                {isSignup ? 'Sign Up' : 'Login'}
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 text-2xl hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <form className="space-y-4">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
              >
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <p className="mt-4 text-center text-sm">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={toggleForm}
                className="text-primary font-medium hover:underline"
              >
                {isSignup ? 'Login here' : 'Sign up here'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
