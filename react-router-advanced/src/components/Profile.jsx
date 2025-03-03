// src/components/Profile.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';  // تأكد من إنشاء هذا المكون
import ProfileSettings from './ProfileSettings';  // تأكد من إنشاء هذا المكون

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Details</Link> {/* رابط للانتقال إلى ProfileDetails */}
          </li>
          <li>
            <Link to="/profile/settings">Settings</Link> {/* رابط للانتقال إلى ProfileSettings */}
          </li>
        </ul>
      </nav>

      {/* مسارات فرعية */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} /> {/* المسار الفرعي للـ ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} /> {/* المسار الفرعي للـ ProfileSettings */}
      </Routes>
    </div>
  );
};

export default Profile;
