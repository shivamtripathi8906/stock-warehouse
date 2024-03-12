import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Banner from "../components/Banner";
import ServicesHomepage from '../components/ServicesHomepage';


function Home() {
  return (
    <div>
      <Announcement/> 
      <Navbar/>
      <Banner/>
      <ServicesHomepage/>
    </div>
  )
}

export default Home