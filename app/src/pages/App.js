import '../styles/App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "./home"
import Profile from './profile';
import TopBreeds from './top';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/top-10-searched-breeds" element={<TopBreeds/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
