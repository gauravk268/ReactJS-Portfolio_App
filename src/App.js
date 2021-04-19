import {
  Navbar,
  // Welcome,
  About,
  Education,
  Skills,
  Projects,
  Courses,
  Achievements,
  Feedback,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Welcome /> */}
      <About />
      <Education />
      <Skills />
      <Projects />
      <Courses />
      <Achievements />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
