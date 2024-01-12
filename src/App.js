import "antd/dist/antd";
import "./App.css";
import Myheader from "./components/Myheader";
import Myfooter from "./components/Myfooter";
import MainPage from "./main";
import ProductPage from "./product";
import UploadPage from "./upload";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Myheader />
      <div id="body">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
      <Myfooter />
    </div>
  );
}

export default App;
