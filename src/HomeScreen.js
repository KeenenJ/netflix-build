import React from 'react';
import './HomeScreen.css';
import Nav from '../../netflix-build/src/Nav';
import Banner from '../../netflix-build/src/Banner';

function HomeScreen() {
  return( /*if problems brackts after return was removed()*/
    <div className="homeScreen">
    
     <Nav/>

     <Banner/>
    {/*Row*/}
    </div>    
    

  )



  
}

export default HomeScreen