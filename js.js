    // Tab Switching Logic
    function switchTab(tab) {
      document.querySelectorAll('.time-section').forEach(section => {
        section.style.display = 'none';
      });
      document.getElementById(tab).style.display = 'block';

      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
    }

    switchTab('clock'); // Start with clock

    // CLOCK
    setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      document.getElementById('current-time').innerHTML = `<span class="animated-number">${hours}</span>:<span class="animated-number">${minutes}</span>:<span class="animated-number">${seconds}</span>`;
    }, 1000);

    // STOPWATCH
    let stopwatchInterval;
    let stopwatchTime = 0;

    function startStopwatch() {
      if (stopwatchInterval) return;
      stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        updateStopwatchDisplay();
      }, 1000);
    }

    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchInterval = null;
    }

    function resetStopwatch() {
      stopwatchTime = 0;
      updateStopwatchDisplay();
      stopStopwatch();
    }

    function updateStopwatchDisplay() {
      const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
      const seconds = String(stopwatchTime % 60).padStart(2, '0');
      document.getElementById('stopwatch-time').innerHTML = `<span class="animated-number">${hours}</span>:<span class="animated-number">${minutes}</span>:<span class="animated-number">${seconds}</span>`;
    }

    // TIMER
    let timerInterval;
    let timerTime;

    function startTimer() {
      const input = document.getElementById('timer-input').value;
      if (!input || timerInterval) return;

      timerTime = parseInt(input);
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        if (timerTime > 0) {
          timerTime--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
        }
      }, 1000);
    }

    function resetTimer() {
      document.getElementById('timer-input').value = '';
      document.getElementById('timer-time').innerText = '00:00:00';
      clearInterval(timerInterval);
      timerInterval = null;
    }

    function updateTimerDisplay() {
      const minutes = String(Math.floor(timerTime / 60)).padStart(2, '0');
      const seconds = String(timerTime % 60).padStart(2, '0');
      document.getElementById('timer-time').innerHTML = `<span class="animated-number">00</span>:<span class="animated-number">${minutes}</span>:<span class="animated-number">${seconds}</span>`;
    }

    // Theme Switcher (optional)
    let currentTheme = 'neon';
    
    function switchTheme(theme) {
      document.body.classList.remove('theme-light', 'theme-dark', 'theme-neon');
      document.body.classList.add(`theme-${theme}`);
      currentTheme = theme;
    }

    // Uncomment to test theme switch
    // switchTheme('neon'); // Start with neon theme
  