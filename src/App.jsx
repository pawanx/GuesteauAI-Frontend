import { useState } from "react";
import "./styles/app.css";
import RecipeForm from "./components/RecipeForm";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* NAVBAR */}

      <nav className="nav-bar">
        <div className="logo">
          🍳 <span>GuesteauAI</span>
        </div>

        <ul className="nav-link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <a href="#generate">
          <button className="nav-btn">Generate Recipe</button>
        </a>
      </nav>

      {/* HERO */}

      <header className="hero-section">
        <div className="hero-text">
          <h1>Create Amazing Recipes with AI</h1>

          <p>
            Turn your ingredients into delicious meals instantly using
            AI-powered recipe generation.
          </p>
        </div>
      </header>

      {/* MAIN SECTION */}

      <main className="app">
        <RecipeForm
          setRecipe={setRecipe}
          loading={loading}
          setLoading={setLoading}
        />

        <div className="recipe-display">
          {loading ? (
            <p className="loading">👨‍🍳 AI Chef is preparing your dish...</p>
          ) : (
            <RecipeCard recipe={recipe} />
          )}
        </div>
      </main>

      <section className="about-section" id="about">
        <h2>About GuesteauAI</h2>

        <p>
          GuesteauAI is an AI-powered recipe assistant that transforms your
          ingredients into delicious recipes instantly using artificial
          intelligence.
        </p>
      </section>
    </>
  );
}

export default App;
