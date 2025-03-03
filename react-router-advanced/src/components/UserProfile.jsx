// src/components/UserProfile.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // الحصول على المعرف من الرابط

  return <div>User Profile for ID: {id}</div>;
};

export default UserProfile;
