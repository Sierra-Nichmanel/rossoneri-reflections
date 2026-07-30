import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MatchAnalysis from "../pages/MatchAnalysis";
import TacticalAnalysis from "../pages/TacticalAnalysis";
import PlayerRatings from "../pages/PlayerRatings";
import Features from "../pages/Features";
import Articles from "../pages/Articles";
import Article from "../pages/Article";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import CategoryPage from "../pages/CategoryPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/match-analysis" element={<MatchAnalysis />} />

        <Route path="/tactical-analysis" element={<TacticalAnalysis />} />

        <Route path="/player-ratings" element={<PlayerRatings />} />

        <Route path="/features" element={<Features />} />

        <Route path="/about" element={<About />} />

        <Route path="/articles" element={<Articles />} />

        <Route path="/articles/:slug" element={<Article />} />

        <Route path="/:category" element={<CategoryPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
