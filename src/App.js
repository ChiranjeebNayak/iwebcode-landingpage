import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Content from "./components/content/Content";
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Sayhello from "./components/sayhello/Sayhello";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Content />
      <About />
      <Clients />
      <Sayhello/>
      <Footer/>
    </>
  );
}

export default App;
