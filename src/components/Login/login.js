import React, { Component } from "react";
import Logo from "../images/logo.svg";
import "../../styles/login/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 상태 초기화
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트된 후 실행할 작업
  }

  render() {
    return (
      <div>
        <div className="leftContainer">
          <div className="left">
            <div style={{ paddingTop: "65px" }}>
              <img className="logo" src={Logo} alt="야행 이미지" />
            </div>
            <div className="line"></div>
            <div className="leftContent">
              <div style={{ paddingBottom: "7px" }}>
                인천 개항장 문화재 야행은
              </div>
              <div>문화재청과 함께하고 있습니다.</div>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default Login;
