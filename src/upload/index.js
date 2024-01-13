import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Upload,
  message,
} from "antd";
import "./index.css";
import { useState } from "react";
import { API_BASE_URL } from "../config/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    axios
      .post(`${API_BASE_URL}/products`, {
        name: values.name,
        description: values.description,
        seller: values.seller,
        price: parseInt(values.price),
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        message.error(`에러가 발생했습니다.${error.message}`);
      });
  };

  const [imageUrl, setImageUrl] = useState("");

  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 이미지</div>}
        >
          <Upload
            name="image"
            action={`${API_BASE_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img
                id="upload-image"
                alt="upload-img"
                src={`${API_BASE_URL}/${imageUrl}`}
              />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" alt="이미지업로드" />
                <span>이미지를 업로드해주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          //rules required:true => 입력을 꼭 해야된다. 안하면 message에 설정한 글이 나타난다.
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
          label={<div className="upload-label">판매자 명</div>}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요" }]}
        >
          <InputNumber className="upload-price" size="large" defaultValue={0} />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품 설명을 적어주세요"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
