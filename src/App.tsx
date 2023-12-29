import JSarticle from "./components/JSarticle";
import AddJsArticles from "./components/AddJsArticles";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <div className="HeaderInApp">
        <Header />
      </div>
      <div className="MainInHeader">
        <Routes>
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/aboutCreators" element={<About />} />
          <Route path="/addArticles" element={<AddJsArticles />} />
          <Route path="/JsArticles" element={<JSarticle />} />
        </Routes>
      </div>
      <div className="FooterInApp">
        <Footer />
      </div>
    </>
  );
}

export default App;
