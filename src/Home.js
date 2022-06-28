import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="https://m.media-amazon.com/images/I/71B1mwrQ4NL._SX3000_.jpg"
          //   src="https://m.media-amazon.com/images/I/61zGXsuEUXL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            // title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            title="ALFA Furnishing Advanced 48x30 Inches Standing Desk for Home Office,Dual Motor Electric Adjustable height Desk,Sit Stand Desk With 4 Pre-Set Memory (48x30, walnut Top + white Frame Dual Motor)"
            price={500.02}
            rating={5}
            // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            image="https://m.media-amazon.com/images/I/71jM1SNHzLL._AC_SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Fullstar 9-in-1 Deluxe Vegetable Chopper Kitchen Gifts | Onion Chopper & Dicer | Peeler, Spiralizer, Zoodle Maker, Lemon Squeezer, Egg Slicer & Seperator- Ultimate Kitchen Gadget"
            price={34.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/915Jnh4JIcL._AC_SL1500_.jpg"
          />

          <Product
            id="49538099"
            title="FLEXISPOT EP4 Classic Electric Standing Desck 63x30 Inches Dual Motor 3 Stages Height Adjustable Desk Stand Up Desk with USB Charging Port and Hooks Sit Stand Desk, Black/Greenstone Top"
            price={444.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41S8sLKIpAL._AC_SY1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903855"
            title="The Road to React: Your journey to master React.js in JavaScript(2022 Edition"
            price={38.04}
            rating={3}
            image=" https://m.media-amazon.com/images/I/41m+5+-JRNL.jpg"
          />
          <Product
            id="4903850"
            title="Jovivi Natural Amethyst Crystal Money Tree Crystal Quartz Feng Shui Wealth Ornament Tree of Life Healing Crystals Reiki Office..."
            price={46.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/816NVuLVUUL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />

          <Product
            id="23445933"
            title="Take Action Like Your Life Depends on it. How to stop Overthinking, Get Motivated,Defeat Your Fears, & Stope Procrastinating"
            price={3.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51diU6+daGL.jpg"
          />
          <Product
            id="23445930"
            title="EDUPLINK Portable Bluetooth Speaker Waterproof IPX7 Wireless Speaker with 20W Louder Speakers Switch Between Bluetooth Pairing and Aux-in Mode by Phone Button Black"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71is4M24SJL._AC_SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829323"
            title="Mimoglad Office Chair, High Back Ergonomic Desk Chair with Adjustable Lumbar Support and Headrest, Swivel Task Chair with flip-up Armrests for Guitar Playing, 5 Years Warranty"
            price={189.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/81yVSKlGcKL._AC_SX679_.jpg"
          />
          <Product
            id="90829324"
            title="Citizen Eco-Drive PCAT Quartz Men's Watch, Stainless Steel, Technology, Silver-Tone (Model: CB5898-59E)"
            price={600.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81i2XRT3LVS._AC_UX679_.jpg"
          />

          <Product
            id="90829325"
            title="Samsung 27 Curved Monitor  Model #LC27F391FHNXZA "
            price={218.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51GxYx5vm8L._AC_.jpg"
          />

          <Product
            id="90829326"
            title="Fullstar Vegetable Chopper - Spiralizer Vegetable Slicer - Onion Chopper with Container - Pro Food Chopper - Black Slicer Dicer Cutter - 4 Blades "
            price={29.12}
            rating={5}
            image="https://m.media-amazon.com/images/I/918R8B34qKL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="LG 49WL95C-WE 32:9 UltraWide Monitor 49 Dual DQHD (5120 x 1440) IPS Display, HDR10, USB Type-C with 85W Power Delivery, Ambient Light Sensor, 2 x 10W Stereo Speaker with Rich Bass - Silver"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41---K3XKzL._AC_SY580_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829301"
            title="Uten Digital Kitchen Scale Ultra Slim Multifunction Stainless Steel Hook Design Food Scale 11lb 5kg With Back-Lit LCD Display Fingerprint Resistant Coating Battery included"
            price={12.98}
            rating={5}
            image=" https://images-na.ssl-images-amazon.com/images/I/51CBYlUNseL._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            id="90829302"
            title="HYER KITCHEN Microfiber Kitchen Towels, Stripe Designed, Super Soft and Absorbent Dish Towels, Pack of 8, 18 x 26 Inch, Gray and White"
            price={12.17}
            rating={4}
            image="
          https://m.media-amazon.com/images/I/81dipO7VNsS._AC_SL1500_.jpg"
          />

          <Product
            id="90829303"
            title="WOODME Kitchen Utensils Set 8 Piece Teak Wooden Cooking Utensil Set Non-Stick Pan Wood Spoons and Spatula Cookware for Home Everyday Use &Kitchen Tools"
            price={34.01}
            rating={5}
            image="
            https://m.media-amazon.com/images/I/71-WJTSvp-S._AC_SX679_.jpg"
          />
          <Product
            id="90829304"
            title="Etekcity Food Kitchen Bowl Scale, Digital Ounces and Grams for Cooking, Baking, Meal Prep, Dieting, and Weight Loss, 11lb/5kg, Backlit Display"
            price={16.91}
            rating={5}
            image="
            https://m.media-amazon.com/images/I/61wTWd76BhL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
