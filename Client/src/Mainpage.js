import React, { useEffect } from 'react';
import Banner from './components/Banner';
import Home from './components/Home';
import Header from './components/Header';
import Product from './components/Product';
import Deal from './components/Deal';
import Feature from './components/Feature';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Chart from './components/Chart';
import Garden from './components/Garden';

const Mainpage = () => {

  if (!sessionStorage.getItem('email')) {
    sessionStorage.setItem('email', "");
  }
  if (!sessionStorage.getItem('list')) {
    sessionStorage.setItem('list', JSON.stringify([]));
  }
  try {
    sessionStorage.setItem('key', "aio_QBmO67uHY8V8yTkVswlti6vTKdgh");
  }
  catch {

  }

    return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Banner />
      <Deal />
      <Garden/>
      <Chart/>
      <ContactUs />
      <Footer />
    </div>
  );

}

export default Mainpage;