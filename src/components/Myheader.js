import { useNavigate } from "react-router-dom";

function Myheader() {
  const naviage = useNavigate();
  return (
    <div id="header">
      <div id="header-area">
        <img
          src="/images/icons/logo.png"
          onClick={() => {
            naviage("/");
          }}
          alt="홈페이지로고"
        />
      </div>
    </div>
  );
}

export default Myheader;
