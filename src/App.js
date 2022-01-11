import logo from './logo.svg';
import './App.css';
import AddPerson from './components/AddPerson';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/addPerson"}>AddUser</Link>
        <Link to={"/profile/2"}>Profile</Link>
        <Link to={"/editProfile"}>Edit Profile</Link>
      </nav>
      <Routes>
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/addPerson" element={<AddPerson/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
