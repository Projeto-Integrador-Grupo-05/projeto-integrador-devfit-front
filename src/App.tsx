import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Login from "./pages/login/Login";
import Sobre from "./pages/Sobre";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
      <div className="">
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sobre" element={<Sobre />}></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
