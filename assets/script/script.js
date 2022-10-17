const gameDuration = 2000;
let scorePlayer = 0;
let scoreComputer = 0;

function getCompChoice() {
  const comp = Math.floor(Math.random() * 3);

  if(comp === 1) return "kertas";
  if(comp === 2) return "batu";
  return "gunting";
}

function getResult(player, comp) {
  if(player == comp) return "Seri";
  if(player == "kertas") return (comp == "batu") ? "Menang" : "Kalah";
  if(player == "gunting") return (comp == "kertas") ? "Menang" : "Kalah";
  if(player == "batu") return (comp == "gunting") ? "Menang" : "Kalah";
}

function spin() {
  const imgComputer = document.getElementById("imgComputer");
  const imagesName = ["kertas", "batu", "gunting"];

  let i = 0;
  const timeBegin = new Date().getTime();
  setInterval(() => {
    if(new Date(). getTime() - timeBegin > gameDuration) {
      clearInterval;
      return;
    }

    imgComputer.src = `assets/image/${imagesName[i > 2 ? i = 0 : i++]}.png`;
  }, 100);
}

function onClickHandler(choice) {
  const pilihanComp = getCompChoice();
  const pilhanPlayer = choice;
  const hasil = getResult(pilhanPlayer, pilihanComp);

  spin();
  
  setTimeout(() => {
    if(hasil === "Menang") {
      document.getElementById("scorePlayer").innerText = ++scorePlayer;
    } else if(hasil === "Kalah") {
      document.getElementById("scoreComputer").innerText = ++scoreComputer;
    }
    // ++ lebih dulu dari score agar ditambah dulu

    document.getElementById("point").innerHTML = hasil;

    const imgComputer = document.getElementById("imgComputer");
    imgComputer.src = `assets/image/${pilihanComp}.png`;
    imgComputer.alt = pilihanComp;
  },gameDuration);
}

const images = document.querySelectorAll("li img");
images.forEach((image) => {
  image.addEventListener("click", () => onClickHandler(image.className));
});
images.forEach((image) => {
  image.addEventListener("keyup", (e) => {
    if(e.key === "Enter" || e.key === " ") onClickHandler(image.className);
  });
});

document.body.addEventListener("keyup", (e) => {
  if(e.key === "j") return onClickHandler("kertas");
  if(e.key === "k") return onClickHandler("batu");
  if(e.key === "l") return onClickHandler("gunting");
});