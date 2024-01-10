import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://380fb4bb-c86a-4065-937a-e540b4613f92.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>상품상세페이지 {id} 상품</h1>;
    </div>
  );
}

export default ProductPage;
