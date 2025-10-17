function webSites() {
  const content = document.getElementById("websContiner");
  content.style.bottom = "0%";
  content.style.zIndex = "1";
  document.getElementById("mcContiner").style.bottom = "-100%";
  document.getElementById("mcContiner").style.zIndex = "0";
  document.getElementById("bsContiner").style.bottom = "-100%";
  document.getElementById("bsContiner").style.zIndex = "0";
  document.getElementById("webs").classList = "tab active";
  document.getElementById("mc").classList = "tab";
  document.getElementById("bs").classList = "tab";
//  if(content.scrollTop > 50) {
//    document.getElementById("scrollToThisElement0").style.right = "0%";
//  }else{
//    document.getElementById("scrollToThisElement0").style.right = "-85px";
//  }
//  document.getElementById("scrollToThisElement1").style.right = "-85px";
}
function mineCraft() {
  const content = document.getElementById("mcContiner");
  content.style.bottom = "0%";
  content.style.zIndex = "1";
  document.getElementById("websContiner").style.bottom = "-100%";
  document.getElementById("websContiner").style.zIndex = "0";
  document.getElementById("bsContiner").style.bottom = "-100%";
  document.getElementById("bsContiner").style.zIndex = "0";
  document.getElementById("webs").classList = "tab";
  document.getElementById("mc").classList = "tab active";
  document.getElementById("bs").classList = "tab";
//  if(content.scrollTop > 50) {
//    document.getElementById("scrollToThisElement2").style.right = "0%";
//  }else{
//    document.getElementById("scrollToThisElement2").style.right = "-85px";
//  }
//  document.getElementById("scrollToThisElement1").style.right = "-85px";
}
function blockStory() {
  const content = document.getElementById("bsContiner");
  content.style.bottom = "0%";
  content.style.zIndex = "1";
  document.getElementById("mcContiner").style.bottom = "-100%";
  document.getElementById("mcContiner").style.zIndex = "0";
  document.getElementById("websContiner").style.bottom = "-100%";
  document.getElementById("websContiner").style.zIndex = "0";
  document.getElementById("webs").classList = "tab";
  document.getElementById("mc").classList = "tab";
  document.getElementById("bs").classList = "tab active";
//  if(content.scrollTop > 50) {
//    document.getElementById("scrollToThisElement2").style.right = "0%";
//  }else{
//    document.getElementById("scrollToThisElement2").style.right = "-85px";
//  }
//  document.getElementById("scrollToThisElement1").style.right = "-85px";
}