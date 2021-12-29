import Login from './componets/Login';
import logo from './logo.svg';
import Fogotlogin from './componets/Fogotlogin';
import './sass/components/App.scss';
import { Route,Router,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/fogotlogin" element={<Fogotlogin/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
