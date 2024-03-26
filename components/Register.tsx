import { useRouter } from 'next/router'
import React, { forwardRef, useState } from 'react'
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = forwardRef<HTMLDivElement>((props, ref) => {
  // State for input fields
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
   // Validate email format
   const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate password strength
const isStrongPassword = (password: string): boolean => {
    const strongPasswordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return strongPasswordRegex.test(password);
};

// Validates the input fields
const validateForm = () => {
    if (!username.trim()) {
        setErrorMessage('Username is required');
        return false;
    }
    if (!isValidEmail(email.trim())) {
        setErrorMessage('Enter a valid email address');
        return false;
    }
    if (!isStrongPassword(password)) {
        setErrorMessage('Password must be at least 8 characters long, include a number, and a symbol');
        return false;
    }
    return true;
};

// Handle form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMessage(''); // Reset error message
  
  if (!isValidEmail(email) || !isStrongPassword(password)) {
    setErrorMessage('Invalid email format or weak password');
    return;
  }

  try {
    const reponse = await axios.post('http://localhost:3000/user/register', {
      username,
      email,
      password,
    });
    console.log(reponse.data); // Handle response appropriately
    router.push('/login'); // Redirect to login upon successful registration
  } catch (error: any) {
    // Error handling with type assertion
    const message = (error.response?.data?.message || 'Registration failed.');
    setErrorMessage(message);
  }
};

const navigateToLogin = () => {
  router.push('/login'); // Redirect to login page
};

  return (
    <div className='bg-gray-50'>
    <div ref={ref} className='container mx-auto p-8 lg:p-6 md:p-4'>
            <h2 className='text-5xl md:text-6xl font-bold mt-40 mb-10'>Register</h2>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                {/* Username Input */}
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='p-4 border border-gray-300 rounded'
                    required
                />
                {/* Email Input */}
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='p-4 border border-gray-300 rounded'
                    required
                />
                {/* Password Input */}
              <div className='relative'>
                <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-4 border border-gray-300 rounded pr-10'
                    required
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                  {passwordVisible ? <FaEyeSlash className="h-5 w-5 text-gray-700" /> : <FaEye className="h-5 w-5 text-gray-700" />}
                </span>
              </div>
                {/* Error Message Display */}
                {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                
                {/* Submit Button */}
                <button type='submit' className='bg-black text-white p-4 rounded'>Register</button>
            
            </form>
            
            {/* Navigation to Login Page */}
            <p className='mt-4'>
                Already have an account? 
                <button onClick={navigateToLogin} className='text-blue-500 hover:underline ml-1 mb-40'>
                    Login here
                </button>
            </p>

        </div>
        </div>
    );
});


export default Register