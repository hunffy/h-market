import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import { UploadOutlined } from "@ant-design/icons";

function Myheader() {
  const naviage = useNavigate();
  return (
    <div id="header">
      <div id="header-area">
        <img
          src="/images/icons/h-market-logo.png"
          onClick={() => {
            naviage("/");
          }}
          alt="홈페이지로고"
        />
        <Button
          size="large"
          icon={<UploadOutlined />}
          onClick={() => {
            naviage("/upload");
          }}
        >
          상품 업로드
        </Button>
      </div>
    </div>
  );
}

export default Myheader;
