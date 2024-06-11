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
let b = document.querySelector('button#btn'); 
b.addEventListener('click',showResult);
let count = 0;
let checkcount = 0;
function showResult(){
  let s = document.querySelector('select#name');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  console.log('value = ' + o.getAttribute('value'));
  console.log('textContent = ' + o.textContent);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + o.getAttribute('value') + '.json';
  axios.get(url).then(Result).catch(showError).then(finish);
}

function Result(resp){
  let server = resp.data;

  if(count > 0){
  let l = document.querySelectorAll('div#result > p');
  for(let n of l){
      n.remove();
    }
  }
  
  let re = document.querySelector('div#result');
  
  let cs = document.querySelectorAll('input[name = "option"]');
  if(weather.checked){
    let wea = document.createElement('p');
    for(let n of server.weather){
      wea.textContent = '天気:' + n.description;
    }
    re.insertAdjacentElement('beforeend', wea);
    checkcount = checkcount + 1;
  }
  if(temp_max.checked){
    let temax = document.createElement('p');
    temax.textContent = '最高気温:' + server.main.temp_max + '℃';
    re.insertAdjacentElement('beforeend', temax);
    checkcount = checkcount + 1;
  }
  if(temp_min.checked){
    let temin = document.createElement('p');
    temin.textContent = '最低気温:' + server.main.temp_min + '℃';
    re.insertAdjacentElement('beforeend', temin);
    checkcount = checkcount + 1;
  }
  if(humidity.checked){
    let humi = document.createElement('p');
    humi.textContent = '湿度:' + server.main.humidity + '%';
    re.insertAdjacentElement('beforeend', humi);
    checkcount = checkcount + 1;
  }
  if(speed.checked){
    let sp = document.createElement('p');
    sp.textContent = '風速:' + server.wind.speed + 'm/s';
    re.insertAdjacentElement('beforeend', sp);
    checkcount = checkcount + 1;
  }
  if(deg.checked){
    let de = document.createElement('p');
    de.textContent = '風向:' + server.wind.deg;
    re.insertAdjacentElement('beforeend', de);
    checkcount = checkcount + 1;
  }
  if(lon.checked){
    let lo = document.createElement('p');
    lo.textContent = '緯度:' + server.coord.lon + '°';
    re.insertAdjacentElement('beforeend', lo);
    checkcount = checkcount + 1;
  }
  if(lat.checked){
    let la = document.createElement('p');
    la.textContent = '経度:' + server.coord.lat + '°';
    re.insertAdjacentElement('beforeend', la);
    checkcount = checkcount + 1;
  }
  if(checkcount < 1){
    let non = document.createElement('p');
    non.textContent = '項目が選択されていません';
    re.insertAdjacentElement('beforeend', non);
  }
  console.log(server);
  count = count + 1;
}

function showError(err){
  console.log(err);
}

function finish(){
  console.log('行ってらっしゃい!');
}