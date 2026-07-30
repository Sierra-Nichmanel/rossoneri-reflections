import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";

import Hero from "../components/home/Hero";
import FeaturedGrid from "../components/home/FeatureGrid";
import LatestMatchAnalysis from "../components/home/LatestMatchAnalysis";
import TacticalSpotlight from "../components/home/TacticalSpotlight";
import PlayerRatings from "../components/home/PlayerRatings";
import FeaturedArticles from "../components/home/FeaturedArticles";
import Newsletter from "../components/home/Newsletter";

import {
  getFeaturedArticles,
  getMatchAnalysis,
  getTacticalAnalysis,
  getPlayerRatings,
  getFeatures,
} from "../services/queries";

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [matchAnalysis, setMatchAnalysis] = useState([]);
  const [tactical, setTactical] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function loadHomepage() {
      const [featuredData, matchData, tacticalData, ratingsData, featuresData] =
        await Promise.all([
          getFeaturedArticles(),
          getMatchAnalysis(),
          getTacticalAnalysis(),
          getPlayerRatings(),
          getFeatures(),
        ]);

      setFeatured(featuredData);
      setMatchAnalysis(matchData);
      setTactical(tacticalData);
      setRatings(ratingsData);
      setFeatures(featuresData);
    }

    loadHomepage();
  }, []);

  return (
    <Layout>
      <SEO
        title="Home"
        description="Premium AC Milan analysis featuring tactical breakdowns, match analysis, player ratings and long-form Rossoneri features."
        image="/logo.png"
        url={window.location.href}
      />
      <Hero article={featured[0]} />

      <FeaturedGrid articles={featured} />

      <LatestMatchAnalysis articles={matchAnalysis} />

      <TacticalSpotlight articles={tactical} />

      <PlayerRatings articles={ratings} />

      <FeaturedArticles articles={features} />

      <Newsletter />
    </Layout>
  );
}
