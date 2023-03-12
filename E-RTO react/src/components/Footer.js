import React from 'react'
import car from '../images/car.png'
import Avinash from '../images/Avinash.JPG'
import Ashish from '../images/Ashish.JPG'
import Anis from '../images/Anis.JPG'
import Harsh from '../images/Harsh.JPG'
import Prathamesh from'../images/Prathamesh.JPG'
export default function Footer() {
  return (
    <div className='mt-5'>
        <footer className='bg-primary p-3'>
        <div className="container">
            <div className="row">
               <marquee behavior="" direction=""><img src={car} alt="" className='img-fluid' style={{width: '7%'}} /><b className='text-center fw-bold text-light'>@2022 copyright rto service</b>
               </marquee> 
               <div className="row">
              
               
                <div className="col-xl-4">
                  <img src={Ashish} alt="" width={100} height={120} />
                </div>
                <div className="col-xl-4">
                  <img src={Avinash} alt="" width={100} height={120} />
                </div>
                <div className="col-xl-4">
                  <img src={Prathamesh} alt="" width={100} height={120}/>
            
              </div>

               
            <div className="col-xl-6">
                  <img src={Anis} alt="" width={100} height={120}/>
                </div>
                     <div className="col-xl-6">
                  <img src={Harsh} alt="" width={100} height={120}/>
                </div>
               
               </div>
        </div>
        </div>
        
        </footer>

    </div>
  )
}
