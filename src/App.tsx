// src/App.tsx (最終修正版)


import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItineraryPlanner from "./ItineraryPlanner";
import Recommend from "./Recommend";
import Favorites from "./Favorites";
import MyTrips from "./MyTrips";
import TripDetail from "./TripDetail";
import ChatBox from "./ChatBox";
import ThemeToggle from "./components/ThemeToggle";

export default function App(){
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<ItineraryPlanner />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <ChatBox />
      
      {/* 【關鍵修正】賦予拉桿一個極高的 z-index，確保它永遠在最上層 */}
      <div className="fixed top-4 right-4 z-[100]">
        <ThemeToggle />
      </div>
    </div>
  );
}
