import React from 'react';
import AdsLeft from './AdsLeft';
import Adsright from './Adsright';
import home from "../components/Home.module.css";
import Products from './Products';
import Slider from './Slider';
import Progress from './Progress';
import Footer from './Footer';
import ImageSlider from './ImageSlider';

const Home = () => {


  return (
    <div className={home.homeMain}>
      <div>
        <AdsLeft />
      </div>
      <div>
        <div>
          <Products />
        </div>
        <div>
        <Slider />
        </div>
        <div>
        <Progress />
        </div>
        <div>
        <ImageSlider />
        </div>
        <div className={home.footer}>
        <Footer />
        </div>
      </div>
      <div>
        <Adsright />
      </div>
    </div>
  )

}

export default Home;