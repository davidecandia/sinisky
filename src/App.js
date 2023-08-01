import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function App() {
  return (
    <div>
      <Home />

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
    </div>
  );
}

export default App;
