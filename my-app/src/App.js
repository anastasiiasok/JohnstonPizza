import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import { Home, Cart } from "./pages";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />

        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
