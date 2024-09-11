import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./component/Main";  // Your existing main component
import Download from "./views/Download";
// import DownloadPage from "./component/DownloadPage";  // Your new download page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/files/download/:uuid" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;

