document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.right === '0%') {
      document.getElementById('closeMenu').click();
    }else{
      document.getElementById('openMenu').click();
    }
  }
};