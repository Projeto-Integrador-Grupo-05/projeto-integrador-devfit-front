import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Home/>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;
