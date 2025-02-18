import React from 'react';
import ProfilePage from './components/ProfilePage'; // تعديل المسار
import UserContext from './components/UserContext'; // تعديل المسار

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // توفير الـ Context لجميع المكونات الفرعية داخل ProfilePage
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
