import logo from './logo.svg';
import './App.css';
import People from './components/People';
import AddPerson from './components/AddPerson';

function App() {
  return (
    <div className="App">
      <People/>
      <AddPerson/>
    </div>
  );
}

export default App;
