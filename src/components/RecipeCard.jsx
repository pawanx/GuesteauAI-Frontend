const RecipeCard = ({ recipe }) => {
  if (!recipe) {
    return (
      <div className="empty-state">
        <h1>🍽️</h1>

        <h2>No Recipe Yet</h2>

        <p>
          Enter ingredients and generate your first AI-powered delicious recipe.
        </p>
      </div>
    );
  }

  return (
    <div className="recipe-card">
      <div className="recipe-top">
        <h2>{recipe.title}</h2>

        <p>
          Freshly generated recipe crafted by AI chef based on your ingredients.
        </p>
      </div>

      <div className="recipe-content">
        <div className="recipe-section">
          <h3>🧂 Ingredients</h3>

          <div className="ingredients-grid">
            {recipe.ingredients?.map((item, index) => (
              <div className="ingredient-chip" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="recipe-section">
          <h3>👨‍🍳 Cooking Steps</h3>

          <div className="steps-list">
            {recipe.steps?.map((step, index) => (
              <div className="step-card" key={index}>
                <div className="step-number">{index + 1}</div>

                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="calorie-box">
          <h4>Estimated Calories</h4>

          <span>🔥 {recipe.calories}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
