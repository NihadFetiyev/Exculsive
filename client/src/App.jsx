import './App.scss';
import "./assets/scss/main.scss"
import Home from './pages/home';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

 
export default App;
