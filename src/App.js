import "./App.css";
import MainPage from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
