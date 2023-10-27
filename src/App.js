import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Fufu from "./page/fufu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Fufu />} />
    </Routes>
  );
}

export default App;
