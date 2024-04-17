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
  
  
  

