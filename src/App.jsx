import "./App.css";
import { Header, Layout, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Router>
        <main>
          <Layout />
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
