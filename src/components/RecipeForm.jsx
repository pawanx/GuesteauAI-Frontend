import { useState } from "react";
import { generateRecipe } from "../services/api";

const RecipeForm = ({ setRecipe, setLoading, loading }) => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("Indian");
  const [difficulty, setDifficulty] = useState("Easy");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!ingredients.trim()) {
      setError("Please enter at least one ingrediant.");
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
      setError("Failed to generate recipe. Please try again.");
    } finally {
      setLoading(false);
      setIngredients("");
      setCuisine("Indian");
      setDifficulty("Easy");
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

          <select
            type="text"
            placeholder="Indian, Italian..."
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="Thai">Thai</option>
            <option value="American">American</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Japanese">Japanese</option>
          </select>
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

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default RecipeForm;
