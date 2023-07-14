import "./App.css";
import "./App.less";
import AppRoutes from "./AppRoutes";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <AppRoutes test-id="routes" />
  </Provider>

  // <Login/>
  );
}
export default App;
