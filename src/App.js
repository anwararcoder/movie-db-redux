import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import PostContent from "./Components/PostContent";
import DetailsPostContent from "./Components/DetailsPostContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostContent />} />
            <Route path="/post/:id" element={<DetailsPostContent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
