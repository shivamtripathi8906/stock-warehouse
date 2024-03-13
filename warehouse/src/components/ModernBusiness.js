import React from 'react';
import business from "../assets/business.svg";
import "../css/ModernBusiness.css";
import ImageBlock from '../snippets/ImageBlock';

function ModernBusiness() {
  return (
    <div>
      <div className='modernMainCoverContainer paddingMain'>
        <div className='modernMainContainer'>
          <div className='modernContentContainer'>
            <div className='modernContentHeading'>
              <p>Simplifying storage & movement of goods for modern Indian Businesses</p>
            </div>
            <div className='modernContentPara'>
              <p>Our solutions enables you to store your goods flexibly across India, transport them domestically on demand, import them from your international suppliers, and export them to your worldwide customers, all with a single partner & technology.</p>
            </div>
            <div className='modernContentNumbers'>
              <div className='contentNumbers'>
                <h2>100+</h2>
                <p>Warehouse</p>
              </div>
              <div className='contentNumbers'>
                <h2>10,000+</h2>
                <p>Trucks</p>
              </div>
              <div className='contentNumbers'>
                <h2>15+</h2>
                <p>Indian Ports</p>
              </div>
              <div className='contentNumbers'>
                <h2>30+</h2>
                <p>Countries</p>
              </div>
            </div>
          </div>
          <div className='modernImageContainer'>
             <ImageBlock props = {business}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModernBusiness