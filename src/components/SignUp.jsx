import React from 'react';

const SignUp = () => {
  return (
    <div className="signup p-8 bg-white text-gray-700 text-center">
      <h1 className="text-4xl text-purple-600 mb-6">Sign Up</h1>
      <p className="text-xl">Join our community and start your language learning journey today!</p>
      <form className="mt-6">
        <label className="block mb-4">
          Name:
          <input type="text" name="name" className="block w-full mt-1 p-2 border rounded" />
        </label>
        <label className="block mb-4">
          Email:
          <input type="email" name="email" className="block w-full mt-1 p-2 border rounded" />
        </label>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
