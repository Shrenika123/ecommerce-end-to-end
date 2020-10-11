import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './SlideShow.css'

const slideImages = [
  'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9/GW/TOMO_TOD_ON/Updated/D17052101_IN_WLME_Redmi_Note9_LandingPage_DesktopTallHero_3000x1200_3._CB409717812_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Autumn/XCM_Manual_ORIGIN_1249652_1306708_IN_3312968_3000x1200_2X_en_IN._CB406551736_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_3000x1200._CB404931379_.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div  className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;