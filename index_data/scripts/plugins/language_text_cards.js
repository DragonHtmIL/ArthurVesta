function loadTextsCards() {
  const p000_set = document.getElementsByClassName("open-link");
  const p001_set = document.getElementsByClassName("download-link");
  var smcn = document.getElementById("smcn");
  var smcc = document.getElementById("smcc");
  if(localStorage.getItem("lang") === "en") {
    smcn.innerHTML = "Snake Mecha Collector";
    smcc.innerHTML = "A classic snake game with Super Mecha Champions styles.";
    for (let i = 0; i < p000_set.length; i++) {
      p000_set[i].textContent = "Open";
    };
    for (let i = 0; i < p001_set.length; i++) {
      p001_set[i].textContent = "Download";
    };
  }else
  if(localStorage.getItem("lang") === "ru") {

  }else
  if(localStorage.getItem("lang") === "he") {

  }
}