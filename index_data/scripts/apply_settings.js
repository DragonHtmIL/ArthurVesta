function applySettings() {
  localStorage.setItem("lang", document.getElementById("langSelection").value);
  window.location.reload();
}