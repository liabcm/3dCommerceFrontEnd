import logo from './logo.svg';
import './App.css';
import People from './components/People';
import AddPerson from './components/AddPerson';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/addPerson"}>AddUser</Link>
        <Link to={"//profile:id"}>Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile:id" element={<People/>} />
        <Route path="/addPerson" element={<AddPerson/>}/>
      </Routes>
    </Router>
  );
}

export default App;
