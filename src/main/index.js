import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://380fb4bb-c86a-4065-937a-e540b4613f92.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러발생", error);
      });
  }, []);

  return (
    <div className="MainPage">
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="bannerImg" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((it, index) => (
            <div key={index} className="product-card">
              <Link className="product-link" to={`/product/${it.id}`}>
                <div>
                  <img
                    className="product-img"
                    src={it.imageUrl}
                    alt="상품이미지"
                  />
                </div>
                <div className="product-content">
                  <span className="product-name">{it.name}</span>
                  <span className="product-price">{it.price}</span>
                </div>
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="images/icons/avatar.png"
                    alt="판매자이미지"
                  />
                  <span>{it.seller}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
