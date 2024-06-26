// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
//hantei();
//hantei();
//hantei();
//hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name = "seisu"]');
  let n = i.value;
  let yoso = Number(n);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;
  /*console.log(kaisu + "回目の予想：" + yoso);
  if(kaisu >= 4 || (kaisu >= 2 && yoso === kotae)){
    console.log("答えは" + kotae + "でした．すでにゲームは終わっています．");
  }else if(yoso === kotae){
    console.log("正解です．おめでとう！");
  }else if(kaisu === 3 && yoso !== kotae){
    console.log("まちがい．残念でした答えは" + kotae + "でした．");
  }else{
    if(yoso > kotae){
        console.log("まちがい．答えはもっと小さいですよ．");
    }else{
        console.log("まちがい．答えはもっと大きいですよ．");
    }
  }*/

  let count = document.querySelector('span#kaisu');
  count.textContent = kaisu;

  let ans = document.querySelector('span#answer');
  ans.textContent = yoso;

  let re = document.querySelector('p#result');
  if(kaisu >= 4){
    re.textContent = '答えは' + kotae + 'でした．すでにゲームは終わっています．';
  }else if(yoso === kotae){
    re.textContent = '正解です．おめでとう！';
  }else if(kaisu === 3 && yoso !== kotae){
    re.textContent = 'まちがい．残念でした答えは' + kotae + 'でした．';
  }else{
    if(yoso > kotae){
        re.textContent = 'まちがい．答えはもっと小さいですよ．';
    }else{
        re.textContent = 'まちがい．答えはもっと大きいですよ．';
    }
  }
}

