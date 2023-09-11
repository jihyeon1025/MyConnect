import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./components/Login/login";
import UserListPage from "./components/user/userListPage";
import Test from "./components/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/user" element={<UserListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
