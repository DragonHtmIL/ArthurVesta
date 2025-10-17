document.onkeydown = function (event) {
  event = (event || window.event);
  if (event.keyCode == 27) {
    if(document.getElementById('menu').style.right === '0%') {
      document.getElementById('closeMenu').click();
    }else{
      document.getElementById('openMenu').click();
    }
  }else
  if((event.key === 'F12') ||
    (event.ctrlKey && event.shiftKey && event.key === 'I') ||
    (event.ctrlKey && event.shiftKey && event.key === 'C') ||
    (event.metaKey && event.altKey && event.key === 'I') ||
    (event.metaKey && event.shiftKey && event.key === 'C')
  ) {
    if(document.getElementById("administratorTools").checked === false) {
      event.preventDefault();
    }
  }
};