  window.onload = function() {
    var gameBlock = document.querySelector(".game-block");
    var button = document.querySelector(".button");
    var digger = document.querySelector(".digger");
    var stone1 = document.querySelector(".stone1");
    var stone2 = document.querySelector(".stone2");
    var stone3 = document.querySelector(".stone3");
    var stone4 = document.querySelector(".stone4");
    startGame();
    function startGame() { 
      gameBlock.width = 1160;
      gameBlock.height = 260;
      function windowToCanvas(gameBlock, x) {
        var bbox = gameBlock.getBoundingClientRect();
        return { x: x - bbox.left * (gameBlock.width / bbox.width)
               };
      }
      gameBlock.onmousemove = processKey;
      let x = 0;
      let dx = 0;
      function processKey(e) {
        e.preventDefault();
        var loc = windowToCanvas(gameBlock, e.clientX);
        dx = loc.x - 70;
        drawFrame();
      }
      document.querySelector(".startZone").onmouseover = function () {
        document.querySelector(".overlayUp").classList.remove('overlayUpOpen');
        document.querySelector(".startZone").classList.remove('startZoneOpen');
        document.querySelector(".digger_s1").classList.add('vis');
        document.querySelector(".overlayUp").classList.remove('overlayUpTransparent');
      };
      function drawFrame() {
        if (dx != 0) {
          x = dx;
          if (x < 60 ) {
            x = 60;
            return; 
          }
          if (x < 160 ) {
            document.querySelector(".punch").style.opacity = '0';
          }
          if (document.querySelector(".digger_s1").classList.contains('vis') && x > 160 ) {
            x = 160;
            document.querySelector(".punch").style.opacity = '100';
            stone1.onclick = function() {
              var time = 60;
              document.querySelector(".digger_s1").classList.remove('vis');
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => stone1.classList.add('hideStone'), 90);
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.add('vis2'), (time * 5));
              document.querySelector(".punch").style.opacity = '0';
            };
          }
          if (document.querySelector(".digger_s1").classList.contains('vis2') && x > 310) {
            x = 310;
            stone2.classList.remove('stoneEvents');
            stone2.onclick = function() {
              var time = 60;
              document.querySelector(".digger_s1").classList.remove('vis2');
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => stone2.classList.add('hideStone'), 90);
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.add('vis3'), (time * 5));
            };
          }
          if (document.querySelector(".digger_s1").classList.contains('vis3') && x > 430 ) {
            x = 430;
            stone3.classList.remove('stoneEvents');
            stone3.onclick = function() {
              var time = 60;
              document.querySelector(".digger_s1").classList.remove('vis3');
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => stone3.classList.add('hideStone'), 90);
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.add('vis4'), (time * 5));
            };
          }
          if (document.querySelector(".digger_s1").classList.contains('vis4') && x > 585 ) {
            x = 585;
            document.querySelector(".overStone").classList.remove('stoneEvents');
            document.querySelector(".overStone").onclick = function() {
              var time = 60;
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
              setTimeout(() => document.querySelector(".overStone").classList.add('overStoneClose'), (time * 4));
            };
            document.querySelector(".overStone2").classList.remove('stoneEvents');
            document.querySelector(".overStone2").onclick = function() {
              var time = 60;
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
              setTimeout(() => document.querySelector(".overStone2").classList.add('overStoneClose'), (time * 4));
            };
            stone4.classList.remove('stoneEvents');
            stone4.onclick = function() {
              var time = 60;
              document.querySelector(".digger_s1").classList.remove('vis4');
              setTimeout(() => document.querySelector(".digger_s1").classList.add('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".dust").classList.remove('hide'), (time * 1));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 2));
              setTimeout(() => document.querySelector(".digger_s3").classList.remove('hide'), (time * 2));
              setTimeout(() => stone4.classList.add('hideStone'), 90);
              setTimeout(() => document.querySelector(".digger_s3").classList.add('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.remove('hide'), (time * 3));
              setTimeout(() => document.querySelector(".digger_s2").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".dust").classList.add('hide'), (time * 4));
              setTimeout(() => document.querySelector(".digger_s1").classList.remove('hide'), (time * 4));
            };
          }
          if (x > 940 ) {
            document.querySelector(".overlayUp").classList.add('overlayUpOpen');
            document.querySelector(".restart").classList.remove('restartClose');
            button.onclick = function () {
              document.querySelector(".restart").classList.add('restartClose');
              document.querySelector(".startZone").classList.add('startZoneOpen');
              document.querySelector(".overlayUp").classList.add('overlayUpTransparent');
              stone1.classList.remove('hideStone');
              stone2.classList.remove('hideStone');
              stone3.classList.remove('hideStone');
              stone4.classList.remove('hideStone');
              stone2.classList.add('stoneEvents');
              stone3.classList.add('stoneEvents');
              stone4.classList.add('stoneEvents');
              document.querySelector(".overStone").classList.add('stoneEvents');
              document.querySelector(".overStone").classList.remove('overStoneClose');
              document.querySelector(".overStone2").classList.add('stoneEvents');
              document.querySelector(".overStone2").classList.remove('overStoneClose');
              digger.style.left = 60 + 'px'; 
            };
          }
          digger.style.left = x + 'px'; 
        }
      }
    }
  };
