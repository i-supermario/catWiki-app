import '../styles/App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
