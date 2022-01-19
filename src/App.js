import logo from './logo.svg';
import './App.css';
import AddPerson from './components/AddPerson';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Store from './components/Store';

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/"}>home</Link>
        <Link to={"/addPerson"}>AddUser</Link>
        <Link to={"/profile/2"}>Profile</Link>
        <Link to={"/editProfile"}>Edit Profile</Link>
        <Link to={"/store"}>Store</Link>
      </nav>
      <Routes>
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/addPerson" element={<AddPerson/>}/>
        <Route path="/editProfile" element={<EditProfile/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </Router>
  );
}

export default App;
