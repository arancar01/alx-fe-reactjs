// src/components/Profile.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';  // مسار إلى ProfileDetails
import ProfileSettings from './ProfileSettings';  // مسار إلى ProfileSettings

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Details</Link> {/* رابط للانتقال إلى ProfileDetails */}
          </li>
          <li>
            <Link to="settings">Settings</Link> {/* رابط للانتقال إلى ProfileSettings */}
          </li>
        </ul>
      </nav>

      {/* المسارات الفرعية */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} /> {/* المسار الفرعي للـ ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} /> {/* المسار الفرعي للـ ProfileSettings */}
      </Routes>
    </div>
  );
};

export default Profile;
