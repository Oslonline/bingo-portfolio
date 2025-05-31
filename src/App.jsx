import NavBar from "./components/NavBar";
import { Hero, Articles, Projects, Stacks, Footer, Credits } from "./sections";
import Devoirs from "./components/Devoirs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <NavBar />
      <Hero />
      <span id="articles"></span>
      <Articles />
      <span id="projects"></span>
      <Projects />
      <span id="stacks"></span>
      <Stacks />
      <Footer />
      <Credits />
    </div>
  );
}

function DevoirsPage() {
  return (
    <Devoirs />
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devoirs" element={<DevoirsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
