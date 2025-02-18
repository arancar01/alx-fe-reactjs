import React, { useContext } from 'react'; // استيراد useContext من React
import UserContext from '../UserContext'; // استيراد UserContext من الملف الذي أنشأته

function UserProfile() {
  // استخدام useContext للحصول على البيانات من UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;

