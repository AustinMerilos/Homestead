import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Search from "./pages/Search";
import Footer from "./components/footer";
import PropertyDetails from "./pages/PropertyDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search?purpose=for-sale" element={<Search />}></Route>
          <Route path="/search?purpose=for-rent" element={<Search />}></Route>
          <Route
            path="/search/property/:id"
            element={<PropertyDetails />}
          ></Route>
        </Routes>
      </Router>
      <Footer title={"2023 Homestead."}></Footer>
    </>
  </React.StrictMode>
);
