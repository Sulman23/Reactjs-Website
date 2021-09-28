import React from 'react';
import web from "../src/images/10.png";
import Common from './Common';

function About() {
  return (
   <>
    <Common 
      name="Welcome to Our Company"
      imgsrc={web}
      btname="Contact Now"
      visit="/Contact"
    />
   </>  
  );
}

export default About;
