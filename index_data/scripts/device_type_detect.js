function checkDevice() {
   if (navigator.userAgent.includes("Mobile")) {
    document.getElementById("adminacces").style.display = "none";
}else{
  return;
};