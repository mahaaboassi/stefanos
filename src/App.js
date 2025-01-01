import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QR from "./pages/qr/page";
import Menu from "./pages/menu/page";
import SubMenu from "./pages/menu/sunMenu";
import Details from "./pages/menu/detailsPlate";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QR/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/menu/:id" element={<SubMenu/>} />
        <Route path="/menu/:id/:subId" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
