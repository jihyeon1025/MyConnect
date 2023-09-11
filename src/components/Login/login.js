import React, { Component } from "react";
import Logo from "../../images/logo.svg";
import "../../styles/login/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

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
        <div className="rightContainer">
          <div className="right">
            <div className="line2"></div>
            <div className="loginName">관리자 로그인</div>
            <div className="formStyle">
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="이메일"
                    style={{ height: "55px" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email"></Form.Group>
                <Form.Group className="mb-3" controlId="pwd">
                  <Form.Control
                    type="email"
                    placeholder="비밀번호"
                    style={{ height: "55px" }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="pwd"></Form.Group>
              </Form>
            </div>
            <Link to="/user">
              <Button
                style={{
                  width: "400px",
                  height: "45px",
                  backgroundColor: "#003e65",
                  fontWeight: "bolder",
                }}
              >
                로그인
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
