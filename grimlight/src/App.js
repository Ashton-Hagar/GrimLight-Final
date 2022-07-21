import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Classes from "./Classes.js";
import Dungeon from "./Dungeon";
import Comments from "./Comments";
import Installation from "./Installation";
import Story from "./Story.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/GrimLight" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Dungeon" element={<Dungeon />} />
        <Route path="/Feedback" element={<Comments />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Installation" element={<Installation />} />
      </Routes>
    </Router>
  );
}

export default App;
