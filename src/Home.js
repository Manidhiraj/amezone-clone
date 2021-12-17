import React from 'react';
import "./Home.css";
import Product from "./Product.js"
// import {homeimage} from "./home.jpg";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img className='home_image' src="https://images.squarespace-cdn.com/content/v1/57127c202fe13107b61658fd/1461637142378-RDBL3AN37RWPA2AVWQBK/Fidelio+1500+x+600.jpg?format=1500" alt="" />
      
              
            <div className="home__row">
                 {/*  Prooduct  */}
                <Product id="1222211" title='The lean startup' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/51sz2f4cm8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" rating={5} />


                <Product id="1222231" title='Noise ColorFit Pulse Smartwatch with 1.4" Full Touch HD Display, SpO2, Heart Rate, Sleep Monitors & 10-Day Battery - Teal Green' price={29.99} image="https://m.media-amazon.com/images/I/41xKKKRQe+L._SY300_SX300_.jpg" rating={5} />

            </div>
            <div className="home__row">
            <Product id="1222212" title='2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Grey (4th Generation)' price={29.99} image="https://images-eu.ssl-images-amazon.com/images/I/41vMjJ5AZwL._SY445_SX342_QL70_FMwebp_.jpg" rating={5} />
            <Product id="1222213" title='Samsung Galaxy M52 5G (ICY Blue, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display' price={29.99} image="https://m.media-amazon.com/images/I/41+EgceMbjL._SY300_SX300_.jpg" rating={5} />
            <Product  id="1222241" title='boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Pitch Black)' price={29.99} image="https://m.media-amazon.com/images/I/613OQSlzhbL._AC_UY436_FMwebp_QL65_.jpg" rating={5} />
            </div>
            <div className="home__row">
                {/*  Prooduct  */}
                <Product id="1222251" title='Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS 400Nits 2-in1 Touch Convertible Laptop (8GB/512GB SSD/Win10/Office/Iris Xe Graphics/Backlit Kb/Black/997gms), 4ZR1D71992' price={29.99} image="https://m.media-amazon.com/images/I/71umlOrdukL._AC_SR360,240_QL70_.jpg" rating={5} />
            </div>
            </div>
     </div> 
    )
}

export default Home;
