import React, { useState, useEffect, ChangeEvent} from 'react'
import axios from 'axios'

const Profile = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchUserData();
    }, []);
  
    // Fetch user data on component mount
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/user/profile', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data', error);
                setErrorMessage('Failed to fetch user data.')
            }
        };

     // Handle form fields change
     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Save the updated user data
    const handleSave = async () => {
        try {
            await axios.put('http://localhost:3000/user/update', userData);
            await fetchUserData(); // 
            setEditMode(false);
            setSuccessMessage('Profile updated successfully.')
        } catch (error) {
            console.error('Error updating user data', error);
            setErrorMessage('Failed to update profile.')
            // Clear existing success message
            setSuccessMessage('');
        }
    };

    // Delete the user account
    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
        if (confirmDelete) {
            try {
                // Implement the deletion logic here
                // You'll need to create an API endpoint in your backend for this
                // For example: await axios.delete(`/user/${userData.id}`);
                console.log("Account deletion logic here");
                // Redirect or update UI post deletion
            } catch (error) {
                console.error('Error deleting user account', error);
                // Handle error (show notification, log error, etc.)
            }
        }
    };

    // Conditional rendering for Edit and View modes
    return (
        <div className='flex justify-center items-center p-4'>
          <div className='max-w-md w-full bg-white shadow-md rounded p-6'>
            {successMessage && (
                <div className='bg-green-100 border border-green-800 text-green-700 px-4 py-3 rounded relative mb-4' role='alert'>
                    <span className='block sm:inline'>{successMessage}</span>
                </div>
            )}
            
            {errorMessage && (
                <div className='bg-red-100 border border-red-800 text-red-700 px-4 py-3 rounded relative mb-4' role='alert'>
                    <span className='block sm:inline'>{errorMessage}</span>
                </div>
            )}
            
            <div>
                    <div className='mb-4'>
                        <label htmlFor="username" className='font-semibold'>Username: </label>
                        {editMode ? (
                            <input 
                                type="text" 
                                id="username"
                                name="username" 
                                className='ml-2 w-auto p-2 border border-gray-300 rounded'
                                value={userData.username} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <span className='ml-2'>{userData.username}</span>
                        )}
                    </div>
                    
                    <div className='mb-4'>
                        <label htmlFor="email" className='font-semibold'>Email: </label>
                        {editMode ? (
                            <input 
                                type="email" 
                                id="email"
                                name="email" 
                                className='ml-2 w-auto p-2 border border-gray-300 rounded'
                                value={userData.email} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <span className='ml-2'>{userData.email}</span>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="password" className='font-semibold'>Password: </label>
                        {editMode ? (
                            <input 
                                type="password" 
                                id="password"
                                name="password" 
                                className='ml-2 w-auto p-2 border border-gray-300 rounded'
                                value={userData.email} 
                                onChange={handleChange} 
                            />
                        ) : (
                            <span className='ml-2'>{userData.email}</span>
                        )}
                    </div>
                    
                    <div className='mt-4'>
                        <button onClick={() => setEditMode(!editMode)} className='mr-2'>{editMode ? 'Save' : 'Edit'}</button>
                        {!editMode && (
                            <button onClick={handleDeleteAccount}>Delete Account</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Profile