let computerScore = 0;
let playerScore = 0;

function bot() {
  var random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random >= 0.34 && random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function result(comp, player) {
  if (player == comp) {
    return "series";
  } else if (player == "rock") {
    comp == "paper" ? (computerScore += 1) : (playerScore += 1);
    return comp == "paper" ? "you lose" : "you win";
  } else if (player == "paper") {
    comp == "scissors" ? (computerScore += 1) : (playerScore += 1);
    return comp == "scissors" ? "you lose" : "you win";
  } else if (player == "scissors") {
    comp == "rock" ? (computerScore += 1) : (playerScore += 1);
    return comp == "rock" ? "you lose" : "you win";
  }
}
function shuffle() {
  const imgcom = document.getElementById("img-com");
  const data = ["paper", "rock", "scissors"];
  let i = 0;
  const now = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - now > 1000) {
      clearInterval;
      return;
    }
    imgcom.setAttribute("src", "img/" + data[i++] + ".png");
    if (i == data.length) {
      i = 0;
    }
  }, 100);
}
const pil = document.querySelectorAll("li img");
pil.forEach(function (c) {
  c.addEventListener("click", function () {
    const pilihanComputer = bot();
    const pilihanPlayer = c.className;
    document.getElementById("p-p").innerHTML =
      `
     <img src="img/` +
      pilihanPlayer +
      `.png" alt="" id="h-p"/>
    `;
    shuffle();
    // const pilihanComputer = bot();
    // const pilihanPlayer = c.className;
    // const hasil = result(pilihanComputer, pilihanPlayer);
    // const compImg = document.querySelector(".computer");
    // compImg.setAttribute("src", "img/" + pilihanComputer + ".png");
    // const info = document.getElementById("text");
    // info.innerHTML = hasil;
    setTimeout(function () {
      document.getElementById("p-c").innerHTML =
        `
     <img src="img/` +
        pilihanComputer +
        `.png" alt="" id="h-p"/>
    `;
      const hasil = result(pilihanComputer, pilihanPlayer);
      const compImg = document.querySelector(".computer");
      compImg.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.getElementById("text");
      info.innerHTML = hasil;
      document.getElementById("s-c").innerHTML = computerScore;
      document.getElementById("s-p").innerHTML = playerScore;
    }, 1000);
  });
});
