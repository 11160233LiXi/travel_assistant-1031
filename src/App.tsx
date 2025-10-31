import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItineraryPlanner from "./ItineraryPlanner";
import Recommend from "./Recommend";
import Favorites from "./Favorites";
import MyTrips from "./MyTrips";
import TripDetail from "./TripDetail";
import Layout from "./components/Layout";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="planner" element={<ItineraryPlanner />} />
        <Route path="recommend" element={<Recommend />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="my-trips" element={<MyTrips />} />
        <Route path="trips/:id" element={<TripDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}