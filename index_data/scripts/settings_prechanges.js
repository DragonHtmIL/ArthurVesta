function checkSettingsChanges() {
  const settingsApplier = document.getElementById("applySettings");
  if(localStorage.getItem("lang") === document.getElementById("langSelection").value) {
    settingsApplier.style.display = "none";
  }else{
    settingsApplier.style.display = "block";
  }
}