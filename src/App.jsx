import "./App.css";
import NavBar from "./components/NavBar";
import { Home, Articles, Projects, Stacks, Footer, Credits } from "./sections";

function App() {
    return (
        <div className="bg-white dark:bg-gray-950">
            <NavBar />
            <Home />
            <span id="Articles"></span>
            <Articles />
            <span id="Projects"></span>
            <Projects />
            <span id="Stacks"></span>
            <Stacks />
            <Footer />
            <Credits />
        </div>
    );
}

export default App;
