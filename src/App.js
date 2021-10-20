import "./styles/App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootstrap/dist/js/bootstrap";
// import Index from "./pages/Index/Index"
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      {/* <Index></Index> */}
      <LoginPage />
      {/* <RegisterPage/> */}
    </div>
  );
}

export default App;
