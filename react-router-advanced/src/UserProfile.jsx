import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();
  return <div>User Profile for ID: {id}</div>;
};

export default UserProfile;
