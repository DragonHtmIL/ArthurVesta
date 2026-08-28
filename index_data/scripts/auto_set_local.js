function checkLanguageStorage() {
  if(localStorage.getItem("lang") === null) {
    // load player
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else
  if(localStorage.getItem("lang") === "") {
    // load player
    localStorage.setItem("lang", "en");
    window.location.reload();
  }else{
    return false;
  }
};