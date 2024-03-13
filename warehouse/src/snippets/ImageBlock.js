import React from 'react';
import "../css-snippet/ImageBlock.css";

function ImageBlock(props) {
  return (
    <div className='imageBlockMainContainer'>
      
        <img src={props.props} alt="image1"/>
      
    </div>
  )
}

export default ImageBlock