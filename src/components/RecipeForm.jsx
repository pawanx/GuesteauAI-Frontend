import { useState } from "react";
import { generateRecipe } from "../services/api";

const RecipeForm = ({ setRecipe, setLoading, loading }) => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ingredients.trim() && !cuisine) {
      alert("Please enter both ingredients and cuisine");
      return;
    }
    try {
      setLoading(true);
      const data = await generateRecipe({
        ingredients,
        cuisine,
        difficulty,
      });

      setRecipe(data.recipe);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setIngredients("");
      setCuisine("");
    }
  };

  return (
    <div className="recipe-form-container" id="generate">
      <h2 className="form-title">🍳 AI Recipe Generator</h2>

      <p className="form-subtitle">
        Enter your ingredients and let AI create a delicious recipe for you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Ingredients</label>

          <input
            type="text"
            placeholder="rice, onion, tomato..."
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Cuisine Type</label>

          <input
            type="text"
            placeholder="Indian, Italian..."
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Difficulty</label>

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button className="generate-btn" type="submit">
          {loading ? "Generating..." : "Generate Recipe"}
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
