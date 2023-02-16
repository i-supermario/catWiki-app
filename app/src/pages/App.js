import '../styles/App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./home"
import Profile from './profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
