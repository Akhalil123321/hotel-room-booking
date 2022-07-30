import ReactDOM from "react-dom/client";
import Room from './/routs/Room';
import SingleRoom from './/routs/SingleRoom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App/App";
import './App/App.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/rooms" element={<Room/>} />
      <Route path="/singleRoom" element={<SingleRoom/>} />
    </Routes>
  </BrowserRouter>
);
