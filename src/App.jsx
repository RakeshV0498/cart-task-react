import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/cart" exact>
            Cart
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
