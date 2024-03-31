import React, { use, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Login component
const Login = () => {
    const [email, setEmail] = useState('');       // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter();

    const navigateToRegister = () => {
        router.push('/register'); // Redirect to the register page
    };

    // Handle the form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message on new submission

        try {
            // API call to backend for login
            const response = await axios.post('http://localhost:3000/user/login', { email, password });

            // Store the received token in localStorage
            localStorage.setItem('token', response.data.token);
            
            // Navigate to user's profile dashboard on successful login
            router.push('/profile');
        
        } catch (error) {
            // Handle errors such as incorrect credentials
            if (axios.isAxiosError(error) && error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An unexpected error occurred.");
            }
        }
    };

      return (
        <div className='bg-gray-50'>
        <div className='container mx-auto p-8 lg:p-6 md:p-4'>
          <h2 className='text-6xl font-bold mt-40 mb-10'>Login</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            {/* Display error message */}
            {errorMessage && (
              <div className="mb-4 text-sm text-red-600">
                  {errorMessage}
              </div>
            )}

            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-4 border border-gray-300 rounded'
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='p-4 border border-gray-300 rounded'
              required
            />
            <button type='submit' className='bg-black text-white p-4 rounded'>Login</button>
          </form>
          <p className='mt-6'>
            Don't have an account? 
            <button onClick={navigateToRegister} className='text-blue-500 hover:underline ml-1 mb-40'>
              Register here
            </button>
          </p>
        </div>
        </div>
      );
    };

export default Login;
