import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Banner from "../components/Banner";
import SolutionsHomepage from '../components/SolutionsHomepage';
import ModernBusiness from '../components/ModernBusiness';


function Home() {
  return (
    <div>
      <Announcement/> 
      <Navbar/>
      <Banner/>
      <SolutionsHomepage/>
      <ModernBusiness/>
    </div>
  )
}

export default Home