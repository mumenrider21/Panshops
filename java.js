var pics_src = new Array("./images/6aa6181fea3147524573d7ac1b900a5b_w.jpeg","pics/2.jpg","pics/3.jpg");


document.getElementById("text-button1").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    btn.textContent = '当店はパンを作る際に水を使わず、ミルクを使っていますので甘めが好きな方やお子様などに大変好評をいただいております。もちろん甘さが苦手な方のためのリッチな気分になれるパンも用意しております。'
    
    document.getElementById("mypic").src="./images/7a74c359c6bed13da0df3c451121a9ec_w.jpeg";
  };

  document.getElementById("text-button2").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    btn.textContent = '当店は普通のパンだけでなく、チーズフォンデュセットなどの幅広い商品を提供しております。';

    document.getElementById("mypic").src="./images/6aa6181fea3147524573d7ac1b900a5b_w.jpeg";
  };

  document.getElementById("text-button3").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    btn.textContent = '小麦などにアレルギーのある方のために、当店ではNo麦パンを提供しております。小麦の代わりに米粉を使用した物もあるので、普段パンを食べない方にもパンを味わっていただきたいです。';

    document.getElementById("mypic").src="./images/324f4f3b3b1a157ca2421fcbf48405a0_w.jpeg";
  };

  const btn = document.getElementById('text-henka');
  const btn1 = document.getElementById('text-henka');



  console.log("読み込み完了")


