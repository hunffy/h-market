import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import locale from "dayjs/locale/ko";

import { API_BASE_URL } from "../config/constants";
import { Carousel } from "antd";

import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.js";

/* dayjs, relativeTime import 하고 

dayjs.extend를 통해 relativeTime넣어주어 확장시키면

day.js().fromNow()를 사용하여 현재시간으로부터 얼마나지났는지 값을 얻을 수 있다.


*/

dayjs.extend(relativeTime);
dayjs.locale("ko");

function MainPage() {
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/products`)
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.log("에러발생", error);
      });

    axios
      .get(`${API_BASE_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  }, []);

  return (
    <div className="MainPage">
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((it, index) => {
          return (
            <div
              id="banner"
              onClick={() => {
                navigate(`${it.href}`);
              }}
            >
              <img src={`${API_BASE_URL}/${it.imageUrl}`} alt="bannerImg" />
            </div>
          );
        })}
      </Carousel>
      <h1 id="product-headline">판매되는 상품들</h1>
      <div id="product-list">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
