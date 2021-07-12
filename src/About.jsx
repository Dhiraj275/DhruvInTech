import React from 'react';
import Common from './Common';
import img5 from './images/character5.svg'
const About = () =>{
    return(
        <>
            <Common
             name="Its ABOUT Me"
             imgsrc={img5}
             visite="/contact"
             btname="Contact Now"
             />
        </>
    );
};
export default About;
