import "./App.css";
import Portfolio from "./portfolio";
import Main from "./Main";
import Content from "./Content";
import Work from "./Work";
import Skill from "./Skill";
import Extra from "./Extra";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Main />
      <Content />
      <Work />
      <Skill />
      <Extra />
      <Footer />
    </div>
  );
}

export default App;
