import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage/login";
import RegisterPage from "./pages/loginPage/register";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Home from "./pages/home/Home";

function App() {
  const theme = useMemo(() => createTheme(themeSettings("light")));
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
