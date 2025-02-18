import React, { useContext } from 'react';
import UserContext from './UserContext'; // تعديل المسار

function UserDetails() {
  const userData = useContext(UserContext); // استهلاك البيانات من الـ Context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
