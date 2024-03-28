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
                const response = await axios.get('http://localhost:3000/user/profile');
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
        <div>
            {editMode ? (
                // Edit Mode: Render input fields to allow the user to edit their information
                <div>
                    <input 
                        type="text" 
                        name="username" 
                        value={userData.username} 
                        onChange={handleChange} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={userData.email} 
                        onChange={handleChange} 
                    />
                    {/* Add fields for other editable information */}
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditMode(false)}>Cancel</button>
                </div>
            ) : (
                // View Mode: Display user's information
                <div>
                    <p>Username: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    {/* Display other user information */}
                    <button onClick={() => setEditMode(true)}>Edit</button>
                    <button onClick={handleDeleteAccount}>Delete Account</button>
                </div>
            )}
        </div>
    );
};


export default Profile