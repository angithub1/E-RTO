import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Routes, Router} from 'react-router-dom';
import Admin from "./AdminHome";
import Citizen from "./CitizenHome";
import Home from "./Home";
import Login from "./Login";
import Staff from "./StaffHome";
import myStore from "./Store";
import CitizenRegister from "./CitizenRegister";
import myimg from '../images/RTOS.jpg';
import StaffRegister from "./StaffRegistration";
import LearningApplicationForm from "./LearningForm";
import PermanentApplicationForm from "./PermanentForm";
import SlotBook from "./SlotBook";
import AppStatus from "./AppStatus";
import PermanentAppList from "./PermanentAppList";
import LearningAppList from "./LearningAppList";
import ViewLearningApp from "./ViewLearningApp";
import ViewLearningAppClass from "./ViewAppClass";
import WrittenTestSlot from "./WrittenTestSlotBooking";
import ViewStatus from "./ViewStatus";
import DrivingSlotBooking from "./DrivingTestSlotBooking";


export default class MainMenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag:false
        }

    }
    render(){
        myStore.subscribe(()=>{this.setState({flag:myStore.getState().loggedin})})
        return(        
                    <div>  
                         
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/login">Login </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/register">Register </a>
      </li>
     
     {/*  <li class="nav-item active">
      <a class="nav-link" href="/staffregister"> Staff Register </a>
    </li>*/} 
     </ul>
   
 </div>

  
</nav>


{/*
                                <ul className="nav nav-tabs">
                                 <li className="nav-item"><Link className="nav-link text-light" to="/home"> Home</Link> </li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/login"> Login</Link> </li>
                                <li className="nav-item"><Link className="nav-link text-light" to="/register"> Register</Link> </li> 
                                </ul>
        </div>     */}
                                   <BrowserRouter>                
                                <Routes>+
                                <Route path="/mainmenu" element={<MainMenu />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/login" element={<Login /> } />
                                <Route path="/register" element={<CitizenRegister /> } />
                                <Route path="/citizenhome" element={<Citizen /> } />
                                <Route path="/staffhome" element={<Staff /> } />
                                <Route path="/adminhome" element={<Admin /> } />
                                <Route path="/staffregister" element={<StaffRegister /> } />
                                <Route path="/learningform" element={<LearningApplicationForm /> } />
                                <Route path="/permanentform" element={<PermanentApplicationForm /> } />
                                <Route path="/slotbook" element={<SlotBook/>}/>
                                <Route path="/permanentapplist" element={<PermanentAppList/>} />
                                <Route path="/LearningApplist" element={<LearningAppList/>} />
                                <Route path="/applicationstatus" element={<AppStatus/>} />
                                <Route path="/viewlearningapp/:application_id" element={<ViewLearningApp/>} />
                                <Route path="/writtentestslot" element={<WrittenTestSlot/>} />
                                <Route path="/viewstatus/:citizen_id" element={<ViewStatus/>} />
                                <Route path="/drivingtestslot" element={<DrivingSlotBooking/>} />
                                
                                </Routes>
                                </BrowserRouter>
                    </div>          

        );
    }
}