import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import SearchResults from "./components/search-results/search-results";
import RecipeDetails from "./components/search-results/recipe-details/recipe-details";
import UpcomingFeatures from "./components/upcoming-features/upcoming-features";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/search-results" element={<SearchResults />} />
      {/* <Route path="/recipe/:title" element={<RecipeDetails />} /> */}
      <Route path="/recipe" element={<RecipeDetails />} />
      <Route path="/upcoming-features" element={<UpcomingFeatures />} />
    </Routes>
  );
}