import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // استدعاء useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد الحذف
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      حذف الوصفة
    </button>
  );
};

export default DeleteRecipeButton;
