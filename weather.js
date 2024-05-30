let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
for(let n of data.weather){
  console.log(n.description);
}
console.log(data.main.temp_max);
console.log(data.main.temp_min);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.coord.lon);
console.log(data.coord.lat);

let re = document.querySelector('div#result');
let r = document.createElement('ul');
let cap = document.createElement('li');
cap.textContent = '都市名:' + data.name;
r.insertAdjacentElement('beforeend',cap);
re.insertAdjacentElement('beforeend',r);

let wea = document.createElement('li');
for(let n of data.weather){
  wea.textContent = '天気:' + n.description;
}
r.insertAdjacentElement('beforeend',wea);

let temax = document.createElement('li');
temax.textContent = '最高気温:' + data.main.temp_max;
r.insertAdjacentElement('beforeend',temax);

let temin = document.createElement('li');
temin.textContent = '最低気温:' + data.main.temp_min;
r.insertAdjacentElement('beforeend',temin);

let humi = document.createElement('li');
humi.textContent = '湿度:' + data.main.humidity;
r.insertAdjacentElement('beforeend',humi);

let sp = document.createElement('li');
sp.textContent = '風速:' + data.wind.speed;
r.insertAdjacentElement('beforeend',sp);

let de = document.createElement('li');
de.textContent = '風向:' + data.wind.deg;
r.insertAdjacentElement('beforeend',de);

let lo = document.createElement('li');
lo.textContent = '緯度:' + data.coord.lon;
r.insertAdjacentElement('beforeend',lo);

let la = document.createElement('li');
la.textContent = '経度:' + data.coord.lat;
r.insertAdjacentElement('beforeend',la);