import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItineraryPlanner from "./ItineraryPlanner";
import Favorites from "./Favorites";
import MyTrips from "./MyTrips";
import Recommend from "./Recommend";
import TripDetail from "./TripDetail";
import GoogleMapsProvider from "./components/GoogleMapsProvider";
import Layout from "./components/Layout";
import "./App.css";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <GoogleMapsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<ItineraryPlanner />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/trip/:id" element={<TripDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </GoogleMapsProvider>
    </BrowserRouter>
  );
}