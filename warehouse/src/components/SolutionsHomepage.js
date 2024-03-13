import React from 'react';
import "../css/Solutions_Homepage.css";
import distributor from "../assets/distributors.svg";
import exporters from "../assets/exporters.svg";
import importers from "../assets/importers.svg";
import manufacturers from "../assets/manufacturers.svg";
import traders from "../assets/traders.svg";


function SolutionsHomepage() {
  return (
    <div>
      <div className='solutionsMainContainer paddingMain'>
        <div className='solutionsHeading'>
          <p>Tailor-Made Solutions to stay ahead of the competiton</p>
        </div>
        <div className='solutionsPara'>
          <p>We cater to business from SME to Enterprise</p>
        </div>
        <div className='solutionsLogoMainContainer'>
          <div className='solutionsLogoContainer'>
            <img src={manufacturers} alt="distributors" />
            <p>Mannufactures</p>
          </div>
          <div className='solutionsLogoContainer'>
            <img src={distributor} alt="distributors" />
            <p>Distributor</p>
          </div>
          <div className='solutionsLogoContainer'>
            <img src={traders} alt="distributors" />
            <p>Traders</p>
          </div>
          <div className='solutionsLogoContainer'>
            <img src={importers} alt="distributors" />
            <p>Importers</p>
          </div>
          <div className='solutionsLogoContainer'>
            <img src={exporters} alt="distributors" />
            <p>Exporters</p>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default SolutionsHomepage;