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
function showResult(){
  let s = document.querySelector('select#name');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  console.log('value = ' + o.getAttribute('value'));
  console.log('textContent = ' + o.textContent);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + o.getAttribute('value') + '.json';
  axios.get(url).then(Result).catch(showError).then(finish);

  let cs = document.querySelectorAll('input[name = "option"]');
  for(let c of cs){
    if(c.checked){
      console.log(c.value);
    }
  }
}

function Result(resp){
  let server = resp.data;
  console.log(server);
}

function showError(err){
  console.log(err);
}

function finish(){
  console.log('行ってらっしゃい!');
}