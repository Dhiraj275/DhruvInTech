import React from 'react';
import img6 from './images/character6.svg'
import Common from './Common';
const Home = () => {
    return (
        <>
         <Common
             name="Grow your Buisness with"
             imgsrc={img6}
             visite="/services"
             btname="Get Started"
             />
        </>
    );
};
export default Home;
