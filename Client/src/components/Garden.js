import React,{useState,useEffect} from 'react'
import axios from 'axios'; 

function handleDoor(x){
  var val = x == "DOOR_OPEN" ? "DOOR_CLOSE" : "DOOR_OPEN"
  axios.post("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.door/data",{
           "datum":{
               "value":val
               }
    },{             
    headers: {
      'Content-Type': 'application/json',
      'X-AIO-Key':'aio_OwCF80DIPGbBRKJYLozbh01EEN81'
    }
  })
  window.location.reload(); 
}

function handleLed(x){
  var val = x == "LED_ON" ? "LED_OFF" : "LED_ON"
  axios.post("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.led/data",{
           "datum":{
               "value":val
               }
    },{             
    headers: {
      'Content-Type': 'application/json',
      'X-AIO-Key':'aio_OwCF80DIPGbBRKJYLozbh01EEN81'
    }
  })
  window.location.reload(); 
}

function Garden() {
  const [dataHeat, setDataHeat] = useState("")
  const [dataHumd, setDataHumd] = useState("")
  const [dataEarth, setDataEarth] = useState("")
  const [dataWater, setDataWater] = useState(0)
  const [dataDoor, setDataDoor] = useState("DOOR_CLOSE")
  const [dataLed, setDataLed] = useState("LED_OFF")
  let data = JSON.parse(sessionStorage.getItem('list'));

  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.gas/data?limit=1").then((response) => {
      setDataHeat(response.data[0]['value'])
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.humi/data?limit=1").then((response) => {
      setDataHumd(response.data[0]['value'])
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.temp/data?limit=1").then((response) => {
      setDataEarth(response.data[0]['value'])
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.door/data?limit=1").then((response) => {
      setDataDoor(response.data[0]['value'])
    });
    }, []);
  useEffect(() => {
    axios.get("https://io.adafruit.com/api/v2/phmngnlgvu/feeds/ttdadn.led/data?limit=1").then((response) => {
      setDataLed(response.data[0]['value'])
    });
    }, []);

    return (
<section className="bestseller" id="garden">
    <div class="bestseller__name">
          <h2 class="name">Properties</h2>
          <p class="line__name"></p>
    </div>

    <div class="container">
          <ul class="bestseller__list">
            <li class="bestseller__item">
              <img src="https://i.imgur.com/fFhEhfl.png" alt="" class="bestseller__image" />
              <h3 class="bestseller__name">TEMPERATURE1</h3>
              <a href="" data-filter="mango-188" class="bestseller__details">
               <i class="fas fa-temperature-high">   :{dataEarth}</i>
              </a>
            </li>
            <li class="bestseller__item">
              <img src="https://i.imgur.com/0YjERwC.png" alt="" class="bestseller__image" />
              <h3 class="bestseller__name">AIR HUMIDITY</h3>
              <a href="" data-filter="lemon-4094" class="bestseller__details">
              <i class="fas fa-cloud">   :{dataHumd}</i>
              </a>
            </li>
            <li class="bestseller__item">
              <img src="https://cdn-icons-png.flaticon.com/512/3520/3520714.png"  alt="" class="bestseller__image" />
              <h3 class="bestseller__name">GAS</h3>
              <a href="" data-filter="coconut-2989" class="bestseller__details">
              <i class="fas fa-gas-pump">   :{dataHeat}</i>
              </a>
            </li>
            <li class="bestseller__item">
              <img src="data:image/png;base64,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" alt="" class="bestseller__image" />
              <h3 class="bestseller__name">LED</h3>
              <button onClick={() => handleLed(dataLed)}>
  On/Off
</button>
              <a href="" data-filter="tangerines-274" class="bestseller__details">
              <i class="fas fa-lightbulb">   :{dataLed=="LED_ON"?"ON":"OFF"}</i>
              </a>
            </li>
            <li class="bestseller__item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEX///9EWmTzfAB4j5v5iwD8/Px7kp73hgCKnadhcnlAV2H/jQAyWGjbdiJPZW86WGbr7e+hcUdxipbzdgDr8fXvuptyj562jW380rRZcHruwqn3ewDzdQDvvqL4u4regSr0hBL1lkL97Nz3snj4z6v1nFH65dH3tYD//fjseACkhGZrfoeTjIDFhk99j5TggSKOjYfxoWPuwZztzrPt0r/yjTDxom3s4NnxnVjvuo/tzK/r6eXacg70iCX83MKRBRyZAAAE0UlEQVR4nO3ciVbTQBQG4BAcqrg7pRaSYgtUcFcERVne/7EMWWembbY2ZOb3v55DG9py5vPezJIm8bxeYzx4pMTg8Kzf5nQQhjCcnvTdopoh6r7LEPp+ODvquG3NI2qnEMlDtp0/5D9EZhbZVvKbBaEfyGPtU/X+szoMUQjjfyJpWrGh/DC2luYwCumfeNpbexcmGTGEyWuZRIgizcmWWC2MSnX+3suz2LdwzVgu9GVw+qC96uM3XcXo7dOlwsj44eNoVPn5T5sSbncVq4VRl/Pu86j80zv7T5wW+kHw5WuZcWd/13FhZJxGpVoCdF8YGb99X0GMgFsIwpWleg/EEK4o1RiIIrzvVc1STYA4woVSTYFAQqNUMyCUUC3VHAgmzEu1AKIJ41LdHinAroQ7G4xmwniuqgA7Eu682NpcvHzdTOgHN8+UjyMK/ecUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJI4brC5BIWNKGCqrruxk2hljTMHGpJRBSqJtQqVYQVFzK6KfSMXREvh5qwfDd0VKihIKvU7GnwhMaQDzlarN7CEJplipfDFJZnEFBozLzxhP/HzLv0ZfeFFfMY94X1fa4KjfUhYk9jWPGEuhZdiDlaiKrSdF6ocyHnNAoKdNbm6URIoXqwDXF9qHtR+9KlGzBCo6cpC2eFChEyh/CrJ4OLOFoYX83gCT2tpwEVsqdxXKhimUNHhcpcFHVOU/SfArNKtSOmqKNFAUQUCvwRX18eAgrNoxh4wibholAIy49iBNKIoFWVqiO+XUL5Y0+PyVy2ENp7poI8Hy7ErLHQrNKSOn1oYTAbvjJjeC6Beprw5xLhRbhWDi2r0usFYBvhwjm09ggvF4EtqlSbqdmVw2CuF2nS08yDFjksy1ufwl+a8PfeZDI5uGoxWqiLJ6vmpXoOhwdhyxFfqGt8q4T6fjj8I9vPS5U1vlVCrS8dHq8h1BJqkTC8UMv0stXM2+5zMdQdcfhXthTanEN1Xno99dfJYfbcshxGWTw+SGLvNmgtNEZ8u4R+vi70/TWENq+AVwbEnGZDQp0LmUP4c/UzWfYET2j5sbbNCEteRRDiX/fE80shhP/PiM9zMVwVVhybgRDqlyBCCvPnFQXrptAE4+XQ8Fn1vUUnwtKX3RQaowVglZrn6gPm0DhTAVNYbCDmsMmtP9wUqt9aYI74+qoXcm2hdTCIQuOGA6XhqFDDIgqFZ3w1AydMlcBC7XsLzNECfuYds2om0U0h/rG2JkEhhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRS2KFwl8IOhfKmE2GHMR40EMrw9vSo7xY3jQZCGV6Nz/pub/OoKwxC/9C59MVRTyj92V3fLTWi3knyopYwCG8dTV8clUIZzu/63ftEdgVVchuK9MLN9J4UyW9E8Q51S1Tn0Iq9L0GlNFWY2tUfQtlK75JeJpRyPvYa3EanK2GWlSxfcYOSVmk4kV3VKfI7i5YJ072v/i1IO4skffmDlwkXcuhpOfTKhdHel4x9Fgg9JTdG1hRT+qzYD8tyGISDOH3xX7dA2CzM5i4KZdB357leVAhlOHVv5lkehvCqg6nLP46mcmmvEG3yAAAAAElFTkSuQmCC"  alt="" class="bestseller__image" />
              <h3 class="bestseller__name">DOOR</h3>
              <button onClick={ () => handleDoor(dataDoor)}>
                On/Off
              </button>
              <a href="" data-filter="coconut-2989" class="bestseller__details">
              <i class="fas fa-door-open">   :{dataDoor=="DOOR_OPEN"?"ON":"OFF"}</i>
              </a>
            </li>
          </ul>
        </div>
    
</section>
    )
}

export default Garden