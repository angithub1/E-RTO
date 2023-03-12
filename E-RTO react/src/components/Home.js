import React from 'react';
import myimg from '../images/RTOS.jpg';
import Footer from './Footer';
import MainMenu from './MainMenu';

class Home extends React.Component {

    render(){
        return(
            <div  style={{ backgroundImage:`url(${myimg})`, height:"200px", backgroundPosition:"center"}}>
           
            </div>

        );
    }

}

export default Home;