window.addEventListener('load', function() {
  checkLanguageStorage();
  loadTexts();
  loadIcon();
  if(localStorage.getItem("lang") === "en") {
    document.getElementById("langSelection").value = "en";
  }else
  if(localStorage.getItem("lang") === "ru") {
    document.getElementById("langSelection").value = "ru";
  }else
  if(localStorage.getItem("lang") === "he") {
    document.getElementById("langSelection").value = "he";
  };
  document.getElementById("webs").click();
});