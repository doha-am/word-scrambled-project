window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  checkbtn = document.getElementById("checkWord");
  refreshbtn = document.getElementById("refreshWord");
  inputtext = document.getElementById('inputWord');
  messege = document.getElementById('messege');
  messege2 = document.getElementById('messege2');
  button = document.getElementById('button');
  button1 = document.getElementById('button1');
  container = document.getElementById('container');

  const pageInit = () => {
    // 0 - 22
    let randomWordIndex = Math.floor(Math.random() * 23);
    var wordObject = words[randomWordIndex];

    // Make the word be random
    let arrofWord = [];
    let newarr = [];
    scrambled = wordObject.word;
    for (let i = 1; i <= scrambled.length;) {
      let indexOfLetter = Math.floor(Math.random() * scrambled.length);
      if (!arrofWord.includes(indexOfLetter)) {

        arrofWord.push(indexOfLetter);
        newarr.push(scrambled[indexOfLetter]);
        i++;

      }
    }
    lblWord.innerHTML = newarr.join("");
    lblHint.innerHTML = wordObject.hint;

    startTimer();
  };

  const changeTimer = () => {
    let timerValue = parseInt(lblTimer.innerHTML);
    if (timerValue <= 0) {
      clearInterval(myInterval);
      pageInit();
    } else lblTimer.innerHTML = timerValue - 1;
  };

  const startTimer = () => {
    lblTimer.innerHTML = 100;
    myInterval = setInterval(changeTimer, 1000);
  };

  // Calling functions
  pageInit();

  refreshbtn.addEventListener("click", () => {
    clearInterval(myInterval);
    pageInit();
  });

  checkbtn.addEventListener("click", () => {
    if (inputtext.value == scrambled) {
      inputtext.value = "";
      messege.setAttribute('class', 'show')
      container.setAttribute('class', 'hide')
      clearInterval(myInterval);
    }
    else {
      inputtext.value = "";
      messege2.setAttribute('class', 'show')
      container.setAttribute('class', 'hide')
      clearInterval(myInterval);
    }
  })

  button.addEventListener("click", () => {
    messege.setAttribute('class', 'hide');
    container.setAttribute('class', 'show')
    clearInterval(myInterval);
    pageInit();
  })

  button1.addEventListener("click", () => {
    messege2.setAttribute('class', 'hide');
    container.setAttribute('class', 'show')
    clearInterval(myInterval);
    pageInit();
  })
});
