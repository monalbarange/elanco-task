import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applications from "./Components/Applications/Applications.component";
import SelectedApplication from "./Components/Applications/SelectedApplication.component";
import Resources from "./Components/Resources/Resources.component";
import SelectedResources from "./Components/Resources/SelectedResources.component";
import Home from "./Components/Home/Home.component";
import Raw from "./Components/Raw/Raw.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/raw" element={<Raw />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/applications/selected/:applicationId" element={<SelectedApplication />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/selected-resource/:resourceId" element={<SelectedResources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;