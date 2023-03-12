import React from 'react';
// import  '../css/background.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import img from "../images/logo.png"
import '../App.css'
class RTOHeader extends React.Component {

    render(){
        return(
            <div className="text-info bg-dark">
                <h1 >
                <img src={img}  width="75" height={75}  className="lft"></img>
                PARIVAHAN
                <h3 className="text-info bg-dark" > Welcome To E-RTO </h3></h1>
                
             
            </div>

        );
    }

}

export default RTOHeader;