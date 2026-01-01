let screen = 1;
let popped = 0;

function next() {
  document.getElementById("s" + screen).classList.remove("active");
  screen++;
  document.getElementById("s" + screen).classList.add("active");
}

function playMusic() {
  document.getElementById("music").play();
}

function blowCandle() {
  document.getElementById("flame").style.display = "none";
  let smoke = document.getElementById("smoke");
  smoke.style.opacity = 1;

  setTimeout(() => {
    smoke.style.opacity = 0;
    next();
  }, 1500);
}

function popBalloon(el) {
  document.getElementById("word").innerText = el.dataset.word;
  el.style.visibility = "hidden";
  popped++;
  confetti();

  if (popped === 4) {
    setTimeout(next, 1500);
  }
}

function confetti() {
  for (let i = 0; i < 25; i++) {
    let d = document.createElement("div");
    d.style.position = "absolute";
    d.style.left = Math.random() * 100 + "vw";
    d.style.top = "0";
    d.style.width = "8px";
    d.style.height = "8px";
    d.style.background = "pink";
    d.style.animation = "fall 2s linear";
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 2000);
  }
}

function restart() {
  location.reload();
}
