import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// import ""https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js""

const App = () => {
  return (
    <div className="container">
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
