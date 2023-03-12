// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import RTOHeader from './components/RtoHeader';
import MainMenu from './components/MainMenu';
import ApplicationForm from './components/LearningForm';
import Home from './components/Home';
import myimg from './images/RTOS.jpg';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header><RTOHeader/></header>     
       <div  style={{ backgroundImage:`url(${myimg})`, height:"500px", backgroundPosition:"center"}}>
      <MainMenu/>

      </div>
 
    </div>
  );
}

export default App;
