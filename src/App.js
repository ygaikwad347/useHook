import Albums from "./components/Albums";
import List from "./components/List";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "20px",
            textDecoration: "none"
          }}
        >
          <Link to="/list">List</Link>
          <Link to="/albums">Albums</Link>
        </nav>
        <Routes>
          <Route path="/list" element={<List />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
