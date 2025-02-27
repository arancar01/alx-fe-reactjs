import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';  // استيراد AddRecipeForm

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        
        {/* عرض نموذج إضافة وصفة */}
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
