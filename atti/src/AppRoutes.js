import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import Loader from "./utils/loader/loader";
import Login from "./components/login/login";
import Signup from "./components/signup";
import Numberfield from "./components/numberfield";

//import Production from "./module/phdh/index.js";

// axios.interceptors.request.use((config) => {
//   let service = new LoginService();
//   if (service.getToken()) {
//     config.headers["appkey"] = service.getToken();
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     //console.log(error);
//     if (error.response.status == 401) {
//       if (error.request.responseURL.includes("Login")) {
//         message.error("Invalid username or password");
//       } else {
//         message.error("Login and try again");
//         window.location = "/login";
//       }
//     }
//     message.error(error.response?.data ?? error.message);
//     return Promise.reject(error);
//   }
// );

const AppRoutes = (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/otp" element={<Numberfield/>} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRoutes;
