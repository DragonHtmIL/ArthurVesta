function checkDevice() {
   if (navigator.userAgent.includes("Mobile")) {
    document.getElementById("adminacces").style.display = "none";
  } else
  if (navigator.userAgent.includes("mobile")) {
    document.getElementById("adminacces").style.display = "none";
  } else {
    document.getElementById("adminacces").style.display = "flex";
  };
}