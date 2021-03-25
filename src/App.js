import "./App.css";
import { Navbar, Welcome, About, Education, Feedback } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <Education />
      <Feedback />
    </div>
  );
}

export default App;
