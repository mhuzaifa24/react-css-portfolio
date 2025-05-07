import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./layouts/Header";
import SideNav from "./layouts/SideNav";
import Footer from "./layouts/Footer";
import MainSection from "./components/MainSection";
import { PageTitleProvider } from "./context/PageTitleContext";

const App = () => {
  return (
    <Router>
      <PageTitleProvider>
        <Header />
        <SideNav />
        <MainSection />
        <Footer />
      </PageTitleProvider>
    </Router>
  );
};

export default App;
