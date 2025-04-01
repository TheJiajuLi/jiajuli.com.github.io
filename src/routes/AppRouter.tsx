import React from "react";
import { Routes, Route } from "react-router-dom";
import MusicExplorer from "../components/MusicExplorer/MusicExplorer";
import CommunityUploadPage from "../components/CommunityUpload/CommunityUploadPage";
// Import other components as needed

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicExplorer />} />
      <Route path="/explorer" element={<MusicExplorer />} />
      <Route path="/community-upload" element={<CommunityUploadPage />} />
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default AppRouter;
