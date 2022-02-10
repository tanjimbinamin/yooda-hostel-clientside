import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  
  return (
    
    <Router>
     <Header></Header>
     <Dashboard></Dashboard>

    </Router>




      
    
    
  );
}

export default App;
