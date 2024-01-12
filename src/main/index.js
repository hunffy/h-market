import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import locale from "dayjs/locale/ko";
/* dayjs, relativeTime import 하고 

dayjs.extend를 통해 relativeTime넣어주어 확장시키면

day.js().fromNow()를 사용하여 현재시간으로부터 얼마나지났는지 값을 얻을 수 있다.


*/

dayjs.extend(relativeTime);
dayjs.locale("ko");

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
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
      <div id="banner">
        <img src="images/banners/banner1.png" alt="bannerImg" />
      </div>
      <h1>판매되는 상품들</h1>
      <div id="product-list">
        {products.map((it, index) => (
          <div key={index} className="product-card">
            <Link className="product-link" to={`/products/${it.id}`}>
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
              <div className="product-footer">
                <div className="product-seller">
                  <img
                    className="product-avatar"
                    src="images/icons/avatar.png"
                    alt="판매자이미지"
                  />
                  <span>{it.seller}</span>
                </div>
                <span className="product-date">
                  {dayjs(it.createdAt).fromNow()}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
