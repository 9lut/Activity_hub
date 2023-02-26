import Navbar from '../components/appbar';
import React from 'react';

const getUserData = () => {
  const stringfiedUser = localStorage.getItem('user') || '';
  if (stringfiedUser) {
    return JSON.parse(stringfiedUser);
  }
  return false;
};

const Profile = () => {
  const userData = getUserData();
  if (!userData) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Profile;
