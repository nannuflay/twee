import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<RegisterPage />} path="/register" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
