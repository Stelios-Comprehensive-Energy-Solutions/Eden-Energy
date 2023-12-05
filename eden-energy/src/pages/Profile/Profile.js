import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        
        <div>
            <Navbar />
            <h1>Your Profile</h1>
            <img src={user.imageUrl} alt="Profile" />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Footer />
        </div>
    );
}

export default Profile;
