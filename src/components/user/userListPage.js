import React, { Component } from "react";

class UserListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 상태(state) 초기화
    };
  }

  componentDidMount() {
    // 컴포넌트가 마운트된 후 실행할 코드
  }

  componentDidUpdate(prevProps, prevState) {
    // 컴포넌트가 업데이트된 후 실행할 코드
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 실행할 코드
  }

  render() {
    return (
      <div>
        <h2>hello</h2>
      </div>
    );
  }
}

export default UserListPage;
