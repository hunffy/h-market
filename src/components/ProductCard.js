import { API_BASE_URL } from "../config/constants.js";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("ko");

function ProductCard(props) {
  const product = props.product;
  return (
    <div key={props.index} className="product-card">
      {product.soldout === 1 && <div className="product-blur" />}
      <Link className="product-link" to={`/products/${product.id}`}>
        <div>
          <img
            className="product-img"
            src={`${API_BASE_URL}/${product.imageUrl}`}
            alt="상품이미지"
          />
        </div>
        <div className="product-content">
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price}</span>
        </div>
        <div className="product-footer">
          <div className="product-seller">
            <img
              className="product-avatar"
              src="/images/icons/avatar.png"
              alt="판매자이미지"
            />
            <span className="seller-name">{product.seller}</span>
          </div>
          <span className="product-date">
            {dayjs(product.createdAt).fromNow()}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
