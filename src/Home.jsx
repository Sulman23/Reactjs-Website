import React from 'react';
import web from "../src/images/img1.png";
import Common from './Common';

function Home() {
  return (
    <>
      <Common
        name="Grow Your Bussines with"
        imgsrc={web}
        btname="Get Started"
        visit="/service"
      />
    </>
  );
}

export default Home;
