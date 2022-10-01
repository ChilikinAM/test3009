import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Circle} from "./pages/circle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< Main />} />
        <Route path='/:id' element={<Circle />} />
      </Routes>
    </div>
  );
}

export default App;
