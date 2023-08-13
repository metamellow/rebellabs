window.addEventListener('DOMContentLoaded', (event) => {
    
    // --- MUSIC ---
    var audio = document.getElementById('background-music');
    var musicSwitch = document.getElementById('music-switch');
  
    musicSwitch.checked = true;
    audio.volume = 0.02;

    audio.play();
    musicSwitch.addEventListener('change', function() {
      if (this.checked) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  

    // --- MATRIX ---
    var canvas = document.getElementById('matrix-canvas');
    var ctx = canvas.getContext('2d');
    var columns;
    var drops = [];

    var matrixCode = '•°·º×ø';
    var codeSize = 14;
    var fallingSpeed = 1; // Adjust the falling speed here (increase for slower, decrease for faster)
    var animationInterval = 10 / 1; // Adjust the animation interval here (lower value for slower, higher value for faster)  
    var characterChangeInterval = 100; // Adjust the character change interval here (lower value for faster, higher value for slower)

    function initializeMatrix() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      columns = Math.floor(canvas.width / codeSize);
  
      for (var i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * canvas.height);
      }
    }
  
    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = '#ff1694';
      ctx.font = codeSize + 'px monospace';
  
      for (var i = 0; i < drops.length; i++) {
        var code = matrixCode[Math.floor(Math.random() * matrixCode.length)];
        ctx.fillText(code, i * codeSize, drops[i] * codeSize);
  
        if (drops[i] * codeSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
  
        drops[i] += fallingSpeed;
      }
    }
  
    function animateMatrix() {
        setTimeout(function() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          drawMatrix();
          setTimeout(animateMatrix, characterChangeInterval);
        }, animationInterval);
      }
  
    initializeMatrix();
    animateMatrix();
  
    window.addEventListener('resize', function() {
      initializeMatrix();
    });
});
  