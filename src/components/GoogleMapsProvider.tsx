import { PropsWithChildren, useMemo, useEffect } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { MAP_API_KEY } from "../googleMaps";

const LIBRARIES = ["places"] as const;

export default function GoogleMapsProvider({ children }: PropsWithChildren) {
  const libraries = useMemo(() => LIBRARIES, []);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "gmaps-sdk",
    googleMapsApiKey: MAP_API_KEY,
    libraries,
    preventGoogleFontsLoading: true,
  });

  useEffect(() => {
    console.debug("[GoogleMaps] isLoaded:", isLoaded, "key?", !!MAP_API_KEY);
    if (!MAP_API_KEY) {
      console.warn("VITE_GOOGLE_MAPS_API_KEY 為空，請檢查 .env 並重啟 Vite。");
    }
  }, [isLoaded]);

  if (loadError) return <div className="p-4 text-red-600">Google Maps 載入失敗</div>;
  if (!isLoaded) return <div className="p-4">正在載入地圖...</div>;
  return <>{children}</>;
}