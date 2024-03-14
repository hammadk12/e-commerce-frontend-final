import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Form validation
        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message ) {
            toast.error("Please fill in all fields.");
            return; // Stop the function if any field is incomplete
        }

        // Endpoint tested and successful
        try {
            const response = await fetch('http://localhost:3000/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });            

            console.log('Raw reponse:', response);

        const data = await response.json();
        console.log('Response data:', data);

        if (response.ok) {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        } else {
            toast.error(data.message || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
        toast.error('An error occurred while sending the message.');
    }
};

return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Contact Us</h1>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2'>
                <input className="border shadow-lg p-3" type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                <input className="border shadow-lg p-3" type='text' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
            </div>
            <input className="border shadow-lg p-3 w-full my-2" type='text' name='subject' placeholder='Subject' value={formData.subject} onChange={handleChange} required />
            <textarea className="border shadow-lg p-3 w-full" name='message' placeholder='Message' value={formData.message} cols={30} rows={10} onChange={handleChange} required ></textarea>
            <button className='border shadow-lg p-3 w-full mt-2' type='submit'>Submit</button>
        </form>
        <ToastContainer />
    </div>
)
}

export default Contact;