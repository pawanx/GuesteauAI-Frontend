import { useState,useEffect } from "react";
import "./styles/app.css";
import RecipeForm from "./components/RecipeForm";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
   const [loadingText, setLoadingText] = useState("");
  const loadingMessages = [
    "👨‍🍳 AI Chef is preparing your dish...",
    "🥘 Mixing fresh ingredients...",
    "🔥 Heating up the virtual kitchen...",
    "🍅 Chopping vegetables with precision...",
    "🧠 AI is crafting your perfect recipe...",
    "✨ Adding a secret chef's touch...",
    "🍽️ Plating your masterpiece..."
  ];

  useEffect(() => {
    if (loading) {
      let index = 0;
      setLoadingText(loadingMessages[0]);

      const interval = setInterval(() => {
        index = (index + 1) % loadingMessages.length;
        setLoadingText(loadingMessages[index]);
      }, 1800);

      return () => clearInterval(interval);
    }
  }, [loading]);

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
            <p className="loading">{loadingText}</p>
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
