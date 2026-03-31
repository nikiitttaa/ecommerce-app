import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) =>{
        event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler}
      autoComplete="on"
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >

      {/* Title */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl font-semibold'>
          {currentState === 'Login' ? 'Login' : 'Sign Up'}
        </p>
        <hr className='border-none h-[1.5px] w-8 bg-[#E8B4A0]' />
      </div>

      {/* Name */}
      {
        currentState === 'Sign Up' && (
          <input 
            type="text"
            name="name"
            className='w-full px-3 py-2 border border-gray-300 bg-[#F6E4DA] rounded-md outline-none'
            placeholder='Full Name'
            required
          />
        )
      }

      {/* Email */}
      <input 
        type="email"
        name="email"
        autoComplete="email"
        className='w-full px-3 py-2 border border-gray-300 bg-[#F6E4DA] rounded-md outline-none'
        placeholder='Email'
        required
      />

      {/* Password */}
      <input 
        type="password"
        name="password"
        autoComplete="current-password"
        className='w-full px-3 py-2 border border-gray-300 bg-[#F6E4DA] rounded-md outline-none'
        placeholder='Password'
        required
      />

      {/* Links */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>

        <p className='cursor-pointer text-gray-900'>
          Forgot your password?
        </p>

        {
          currentState === 'Login'
            ? (
              <p 
                onClick={() => setCurrentState('Sign Up')} 
                className='cursor-pointer text-gray-900'
              >
                Create account
              </p>
            )
            : (
              <p 
                onClick={() => setCurrentState('Login')} 
                className='cursor-pointer text-gray-900'
              >
                Login Here
              </p>
            )
        }

      </div>

      {/* Button */}
      <button className='bg-[#E8B4A0] text-white font-medium px-8 py-2 mt-4 rounded-md hover:bg-[#d99c85] transition w-full'>
        {currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>

    </form>
  )
}

export default Login