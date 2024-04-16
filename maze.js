  window.onload = function() {

var start = document.querySelector(".startButton");
var restart = document.querySelector(".restartButton");
var fireImg = document.querySelector(".fire");

start.addEventListener("mouseover", (e) => {
    document.querySelector('.overlay').classList.remove('overlayUp');
    document.querySelector('.start').classList.add('hideImage');
    document.querySelector('.startButton').classList.add('hideButton');
}, false);

restart.addEventListener("mouseover", (e) => {
    document.querySelector('.overlay').classList.remove('overlayUp');
    document.querySelector('.restart').classList.add('hideImage');
    document.querySelector('.restartButton').classList.add('hideButton');
    document.querySelector('.winSub').classList.add('hideImage');
    fireImg.classList.remove('fireVis');
    canvasDraw();
}, false);

document.querySelector('#canvas').addEventListener("mouseout", (e) => {
    document.querySelector('.overlay').classList.add('overlayUp');
    document.querySelector('.restart').classList.remove('hideImage');
    document.querySelector('.restartButton').classList.remove('hideButton');
    return;
}, false);

canvasDraw();

function canvasDraw() {

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");
  
  canvas.width = 1160;
  canvas.height = 264;
  
  

  // ------------ Движение мыши по Canvas ------------
  
  function windowToCanvas(canvas, x, y) {
      var bbox = canvas.getBoundingClientRect();
      return { x: x - bbox.left * (canvas.width / bbox.width),
          y: y - bbox.top * (canvas.height / bbox.height)
      };
  }
  
  canvas.onmousemove = processKey;
  
// ------------ Движение мыши по Canvas ------------  
  
   // начальная позиция
  let x = 0;
  let y = 0;
  
  let timer;
  // смещение
  let dx = 0;
  let dy = 0;
  
  let fillColor = "#ffffff";

  function drawMazeWall() {

      var rectangles = [
        [14.5, 14, 7, 232],
        [16, 239, 1050, 7],
        [1138.5, 14, 7, 233],
        [113, 14, 1028, 7],
        [113, 73, 7, 102],
        [113, 73, 173, 7],
        [279, 73, 7, 52],
        [113, 168, 232, 7],
        [338, 14, 7, 161],
        [408.5, 83, 7, 163],
        [409.5, 83, 124, 7],
        [600, 83, 55, 7],
        [479, 160.5, 176, 7],
        [648, 14, 7, 153],
        [713.5, 87, 7, 80],
        [714.5, 160.5, 353, 7],
        [1060.5, 167, 7, 79],
        [1122, 160.5, 22, 7],
        [921, 98.5, 220, 7],
        [921, 60, 38, 7],
        [921, 60, 7, 40],
        [852, 84, 7, 80],
        [781, 84, 75, 7],
        [0, 0, 0, 0],
      ];

      for (var i = 0; i < rectangles.length; i += 1) {
        
        context.beginPath();
        context.rect(rectangles[i][0], rectangles[i][1], rectangles[i][2], rectangles[i][3]);
        context.fillStyle = fillColor;
      //   context.shadowOffsetX = 3;
      //   context.shadowOffsetY = 3;
      //   context.shadowBlur = 20;
      //   context.shadowColor = "rgba(217,255,67,0.3)";
        context.fill();
        context.closePath();
      }

  }
  
  // отрисовать фон лабиринта
  drawMaze(50, 14);
  
  // отрисовка фона
  function drawMaze(startingX, startingY) {
      
      // Рисуем лабиринт
      drawMazeWall();
      
      // Рисуем значок
      x = startingX;
      y = startingY;
      
      // Рисуем следующий кадр
      window.requestAnimationFrame(drawFrame);
  }
  
  // Обработка нажатия кнопок
    function processKey(e) {
      e.preventDefault();
     
      var loc = windowToCanvas(canvas, e.clientX, e.clientY);

      dx = loc.x;
      dy = loc.y;
    }

  // Отрисовка кадра
    function drawFrame() {
        
      // Обновляем кадр только если значок движется
      if (dx != 0 || dy != 0) {

        x = dx - 14;
        y = dy - 16;
  
      //   Проверка столкновения со стенками лабиринта

        if (checkForCollision()) {
          if(true) {
            fireImg.style.left = x + 'px'; 
            fireImg.style.top = y + 'px';
            fireImg.classList.add('fireVis');
            document.querySelector('.overlay').classList.add('overlayUp');
            document.querySelector('.restart').classList.remove('hideImage');
            document.querySelector('.restartButton').classList.remove('hideButton');
          } 
          x -= dx;
          y -= dy;
          dx = 0;
          dy = 0;
        }
        
        

        // Проверяем дошел ли пользователь до финиша
        if (y > (canvas.height - 90) && x > (canvas.width - 95) ) {
          document.querySelector('.overlay').classList.add('overlayUp');
          document.querySelector('.restart').classList.remove('hideImage');
          document.querySelector('.restartButton').classList.remove('hideButton');
          document.querySelector('.winSub').classList.remove('hideImage');
          return; 
        }
      }
  
      // Рисуем следующий кадр
      window.requestAnimationFrame(drawFrame);
    }
    
    function checkForCollision() {
      // Перебираем все пиксели лабиринта и инвертируем их цвет
      
      let imgData = context.getImageData(x, y, 28, 32);
      let pixels = imgData.data;
  
      // Получаем данные для одного пикселя
      for (let i = 0; n = pixels.length, i < n; i += 4) {
        let red = pixels[i];
        let green = pixels[i+1];
        let blue = pixels[i+2];
        let alpha = pixels[i+3];
  
      //   Смотрим на наличие черного цвета стены, 
      //   что указывает на столкновение
        if (red == 255 && green == 255 && blue == 255) {
          return true;
        }

        if (red == 33 && green == 36 && blue == 37) {
          return true;
        }
        

      }
      // Столкновения не было
      return false;
    }
}





//   ----------------------------- Mobile script -------------------------------------------------------
  
  
  
  
  
    var startMob = document.querySelector(".startButtonMob");
    var restartMob = document.querySelector(".restartButtonMob");
    var fireImgMob = document.querySelector(".fireMob");
  
    var iconMob = document.querySelector(".iconMob");
    
    var horizontal = document.querySelector(".horizontal");
    var buttCntrl = document.querySelectorAll(".buttCntrl");
  
    var upB = document.querySelector(".upB");
    var leftB = document.querySelector(".leftB");
    var rightB = document.querySelector(".rightB");
    var bottomB = document.querySelector(".bottomB");
    
    startMob.addEventListener("mouseover", (e) => {
        document.querySelector('.overlayMob').classList.remove('overlayUpMob');
      //   document.querySelector('.startMob').classList.add('hideImageMob');
        document.querySelector('.startButtonMob').classList.add('hideButtonMob');
        document.querySelector('.restartButtonMob').classList.remove('hideButtonMob');
        horizontal.classList.remove('horizontalBlock');
    }, false);
    
    restartMob.addEventListener("mouseover", (e) => {
        document.querySelector('.overlayMob').classList.remove('overlayUpMob');
      //   document.querySelector('.restartMob').classList.add('hideImageMob');
        document.querySelector('.restartButtonMob').classList.add('disableButton');
        document.querySelector('.restartMob').classList.remove('animateRestart');
        document.querySelector('.winSubMob').classList.add('hideImageMob');
        fireImgMob.classList.remove('fireVisMob');
        horizontal.classList.remove('horizontalBlock');
        iconMob.classList.remove('iconMobHide');
        iconMob.style.left = 300 + 'px'; 
        iconMob.style.top = 6 + 'px';
        canvasDrawMob();
    }, false);
    
    canvasDrawMob();
    
    function canvasDrawMob() {
    
      let canvasMob = document.getElementById("canvasMob");
      let contextMob = canvasMob.getContext("2d");
      
      canvasMob.width = 360;
      canvasMob.height = 432;
      
      buttCntrl.forEach(function(butt) {
        butt.onclick = processKeyMob;
      });
  
      // начальная позиция
      let xMob = 0;
      let yMob = 0;
      
      let timerMob;
      // смещение
      let dxMob = 0;
      let dyMob = 0;
      
      let fillColorMob = "#ffffff";
      // let fillColor = "#000000";
  
      function drawMazeWallMob() {
    
          contextMob.beginPath();
          contextMob.rect(0,0, 360, 1);
          contextMob.fillStyle = 'rgb(33,36,37)';
          contextMob.fill();
          contextMob.closePath();
  
          var rectanglesMob = [
            [12.5, 32.5, 7, 331.5],
            [347.5, 32.5, 7, 394],
            [121, 100, 7, 96],
            [121, 310, 7, 54],
            [218, 255, 7, 108],
            [283, 99, 7, 33.5],
            [283, 191, 7, 109],
  
            [13.5, 32.5, 266, 7],
            [13.5, 420, 340.5, 7],
            [121, 97.5, 169, 7],
            [121, 190, 169, 7],
            [77, 253, 148, 7],
            [13.5, 357.5, 114.5, 7],
            [178, 357.5, 176, 7],
  
            [0, 0, 0, 0],
          ];
    
          for (var iMob = 0; iMob < rectanglesMob.length; iMob += 1) {
            
            contextMob.beginPath();
            contextMob.rect(rectanglesMob[iMob][0], rectanglesMob[iMob][1], rectanglesMob[iMob][2], rectanglesMob[iMob][3]);
            contextMob.fillStyle = fillColorMob;
            contextMob.fill();
            contextMob.closePath();
          }
  
      }
      
      // отрисовать фон лабиринта
      drawMazeMob(300, 6);
      
      // отрисовка фона
      function drawMazeMob(startingXMob, startingYMob) {
          
          // Рисуем лабиринт
          drawMazeWallMob();
          
          // Рисуем значок
          xMob = startingXMob;
          yMob = startingYMob;
  
          // Рисуем следующий кадр
          window.requestAnimationFrame(drawFrameMob);
      }
      
        function processKeyMob(e) {
          e.preventDefault();
  
          // Если значок находится в движении, 
          // останавливаем его
          dxMob = 0;
          dyMob = 0;
          
          var speed = 0.9;
          
          
          buttCntrl.forEach(function(butt) {
            butt.classList.remove('active');
          });
          this.classList.add('active');
     
          
          // Если нажата стрелка вверх, 
          // начинаем двигаться вверх
          if (e.target == upB) {
            dyMob = -speed;
          }
        
          // Если нажата стрелка вниз, 
          // начинаем двигаться вниз
          if (e.target == bottomB) {
            dyMob = speed;
          }
        
          // Если нажата стрелка влево, 
          // начинаем двигаться влево
          if (e.target == leftB) {
            dxMob = -speed;
          }
        
          // Если нажата стрелка вправо, 
          // начинаем двигаться вправо
          if (e.target == rightB) {
            dxMob = speed;
          }
        }
    
      // Отрисовка кадра
        function drawFrameMob() {
            
          // Обновляем кадр только если значок движется
          if (dxMob != 0 || dyMob != 0) {
    
            xMob += dxMob;
            yMob += dyMob;
      
          //   Проверка столкновения со стенками лабиринта
        
            if (checkForCollisionMob()) {
              if(true) {
                fireImgMob.style.left = xMob + 'px'; 
                fireImgMob.style.top = yMob + 'px';
                fireImgMob.classList.add('fireVisMob');
                document.querySelector('.overlayMob').classList.add('overlayUpMob');
                document.querySelector('.restartMob').classList.remove('hideImageMob');
                document.querySelector('.restartButtonMob').classList.remove('hideButtonMob');
                document.querySelector('.restartMob').classList.add('animateRestart');
                horizontal.classList.add('horizontalBlock');
                iconMob.classList.add('iconMobHide');
                buttCntrl.forEach(function(butt) {
                  butt.classList.remove('active');
                });
                document.querySelector('.restartButtonMob').classList.remove('disableButton');
              //   xMob = 300;
              //   yMob = 6;
              } 
              xMob -= dxMob;
              yMob -= dyMob;
              dxMob = 0;
              dyMob = 0;
              
            }
  
            iconMob.style.left = xMob + 'px'; 
            iconMob.style.top = yMob + 'px';
            
            // Проверяем дошел ли пользователь до финиша
            if (yMob > (canvasMob.height - 67) && xMob < (canvasMob.width - 300) ) {
              document.querySelector('.overlayMob').classList.add('overlayUpMob');
              // document.querySelector('.restartMob').classList.remove('hideImageMob');
              // document.querySelector('.restartButtonMob').classList.remove('hideButtonMob');
              document.querySelector('.winSubMob').classList.remove('hideImageMob');
              document.querySelector('.restartMob').classList.add('animateRestart');
              iconMob.classList.add('iconMobHide');
              buttCntrl.forEach(function(butt) {
                  butt.classList.remove('active');
              });
              document.querySelector('.restartButtonMob').classList.remove('disableButton');
              return; 
            }
          }
         // Рисуем следующий кадр
          window.requestAnimationFrame(drawFrameMob);
          
        }
        
        function checkForCollisionMob() {
          // Перебираем все пиксели лабиринта и инвертируем их цвет
          
          let imgDataMob = contextMob.getImageData(xMob, yMob, 28, 32);
          let pixelsMob = imgDataMob.data;
      
          // Получаем данные для одного пикселя
          for (let iMob = 0; nMob = pixelsMob.length, iMob < nMob; iMob += 4) {
            let redMob = pixelsMob[iMob];
            let greenMob = pixelsMob[iMob+1];
            let blueMob = pixelsMob[iMob+2];
            let alphaMob = pixelsMob[iMob+3];
          //   Смотрим на наличие черного цвета стены, 
          //   что указывает на столкновение
            if (redMob == 255 && greenMob == 255 && blueMob == 255) {
              return true;
            }
    
            if (redMob == 33 && greenMob == 36 && blueMob == 37) {
              return true;
            }
          }
          // Столкновения не было
          return false;
        }
    }
};
