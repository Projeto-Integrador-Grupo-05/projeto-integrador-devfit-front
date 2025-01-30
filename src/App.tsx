import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import ListaTreino from "./components/treino/listatreino/ListaTreino";
import FormTreino from "./components/treino/formtreino/FormTreino";

import About from "./pages/about/About";

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
              <Route path="/treino" element={<ListaTreino />} />
              <Route path="/formtreino" element={<FormTreino />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
