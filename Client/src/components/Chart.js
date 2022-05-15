import React, { useRef, useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

function handleData(data){
  var time = []
  var currentDate =  9// d.getDate()
  var currentMonth = 5//d.getMonth()
  for(var x =0; x < 20; x++){
    if(data[x]['created_at'].slice(5,7) == currentMonth && data[x]['created_at'].slice(8,10) == currentDate){
      var name1 = data[x]['created_at'].split('T')
      name1 = name1[1].slice(0, -4)
      time.push({
        name: name1,
        uv: data[x]['value']
      })
    }
  }
  return time
}

function Chart() {

  const [gas, setGas] = React.useState()
  const [humi, setHumi] = React.useState()
  const [temp, setTemp] = React.useState()

  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.gas/data").then((response) => {
      var a = handleData(response.data)
      setGas(a)
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.humi/data").then((response) => {
      var a = handleData(response.data)
      setHumi(a)
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.temp/data").then((response) => {
      var a = handleData(response.data)
      setTemp(a)
    });
    }, []);

    return ( 
      <section className="contact" id="contact">
            <div className="swiper home-slider">
            <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div >
                  <div className="content">
                  <h1 className="heading"> <span>Chart</span> gas </h1>
                   <LineChart width={1300} height={400} data={gas} margin={{ top: 5, right: 100, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  <Tooltip />
                  </LineChart>
                  </div>
              </div>
              </div>
            <div className="swiper-slide slide">
              <div >
                  <div className="content">
                  <h1 className="heading"> <span>Chart</span> humi </h1>
                   <LineChart width={1300} height={400} data={humi} margin={{ top: 5, right: 100, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  <Tooltip />
                  </LineChart>
                  </div>
              </div>
              </div>
            <div className="swiper-slide slide">
              <div >
                  <div className="content">
                  <h1 className="heading"> <span>Chart</span> temp </h1>
                   <LineChart width={1300} height={400} data={temp} margin={{ top: 5, right: 100, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  <Tooltip />
                  </LineChart>
                  </div>
              </div>
              </div>
            </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
      </section>
    )
  }
  
  export default Chart