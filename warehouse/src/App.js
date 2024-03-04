import { Route , Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path = "/home" Component={Home}/>
      </Routes>
    </div>
  );
}

export default App;
