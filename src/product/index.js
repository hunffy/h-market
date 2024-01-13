import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import { API_BASE_URL } from "../config/constants";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product);
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`${API_BASE_URL}/products/${id}`)
        .then((result) => {
          navigate("/");
        })
        .catch((error) => {
          console.log("error :", error);
        });
    }
  };

  if (!product) {
    return <h1>상품 정보를 불러오는 중입니다...</h1>;
  }
  return (
    <div className="ProductPage">
      <div id="image-box">
        <img src={`${API_BASE_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div className="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <pre id="description">{product.description}</pre>
      </div>
      <div className="button-box">
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}

export default ProductPage;
