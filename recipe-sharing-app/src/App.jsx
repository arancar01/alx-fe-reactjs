import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // استيراد التوجيه
import RecipeList from './components/RecipeList'; // استيراد مكون قائمة الوصفات
import RecipeDetails from './components/RecipeDetails'; // استيراد مكون تفاصيل الوصفة

function App() {
  return (
    <Router> 
      <div>
        <h1>Recipe Sharing Application</h1>

        <Routes>
          {/* المسار لعرض جميع الوصفات */}
          <Route path="/" element={<RecipeList />} />
          
          {/* المسار لتفاصيل الوصفة مع ID */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
