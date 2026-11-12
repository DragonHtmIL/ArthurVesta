function loadTexts() {
  const a000 = document.getElementById("titleHeader");
  const a001 = document.getElementById("settingsLang");
  const a002 = document.getElementById("menuTitle");
  const a003 = document.getElementById("applySettings");
  const a004 = document.getElementById("adminToolsLang");
  const a005 = document.getElementById("alertCancel");
  const a006 = document.getElementById("alertConfirm");
  const a007 = document.getElementById("reloadPageBtn");
  const a008 = document.getElementById("closePageBtn");
  const a011 = document.getElementById("sLsLang");
  const a016 = document.getElementById("modsLang");
  const a017 = document.getElementById("texturesLang");
  /////////////////////////////////Sets/////////////////////////////////
  const a000_set = document.getElementsByClassName("websLang");
  const a001_set = document.getElementsByClassName("mcLang");
  const a002_set = document.querySelectorAll(".open-btn");
  const a003_set = document.getElementsByClassName("whLang");
  const a007_set = document.getElementsByClassName("aiAppsLang");
  if(localStorage.getItem("lang") === "en") {
    if(a001) a001.innerHTML = "Settings";
    if(a002) a002.innerHTML = "Menu";
    if(a003) a003.innerHTML = "Apply";
    if(a004) a004.innerHTML = "Developments";
    if(a005) a005.innerHTML = "No";
    if(a006) a006.innerHTML = "Yes";
    if(a007) a007.innerHTML = "Reload";
    if(a008) a008.innerHTML = "Close";
    if(a011) a011.innerHTML = "Language";
    if(a016) a016.innerHTML = "- = Mods = -";
    if(a017) a017.innerHTML = "- = Textures = -";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Websites";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Minecraft";
    };
    for (let i = 0; i < a002_set.length; i++) {
      if(a002_set[i].classList.contains("en")) {
        a002_set[i].textContent = "Open in English";
      }else
      if(a002_set[i].classList.contains("ru")) {
        a002_set[i].textContent = "Open in Russian";
      }else
      if(a002_set[i].classList.contains("he")) {
        a002_set[i].textContent = "Open in Hebrew";
      }else{
        a002_set[i].textContent = "Open";
      }
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Windhawk";
    };
    for (let i = 0; i < a007_set.length; i++) {
      a007_set[i].textContent = "Apps For Android";
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    if(a001) a001.innerHTML = "Настройки";
    if(a002) a002.innerHTML = "Меню";
    if(a003) a003.innerHTML = "Применять";
    if(a004) a004.innerHTML = "Разработки";
    if(a005) a005.innerHTML = "Нет";
    if(a006) a006.innerHTML = "Да";
    if(a007) a007.innerHTML = "Перезагрузить";
    if(a008) a008.innerHTML = "Закрыть";
    if(a011) a011.innerHTML = "Язык";
    if(a016) a016.innerHTML = "- = Моды = -";
    if(a017) a017.innerHTML = "- = Текстуры = -";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Веб-сайты";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Майнкрафт";
    };
    for (let i = 0; i < a002_set.length; i++) {
      if(a002_set[i].classList.contains("en")) {
        a002_set[i].textContent = "Открыть на Английский";
      }else
      if(a002_set[i].classList.contains("ru")) {
        a002_set[i].textContent = "Открыть на Русский";
      }else
      if(a002_set[i].classList.contains("he")) {
        a002_set[i].textContent = "Открыть на Иврите";
      }else{
        a002_set[i].textContent = "Открыть";
      }
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Windhawk";
    };
    for (let i = 0; i < a007_set.length; i++) {
      a007_set[i].textContent = "Приложения для Android";
    };
  }else
  if(localStorage.getItem("lang") === "he") {
    if(a001) a001.innerHTML = "הגדרות";
    if(a002) a002.innerHTML = "תפריט";
    if(a003) a003.innerHTML = "אישור";
    if(a004) a004.innerHTML = "התפתחויות";
    if(a004)  a004.style.width = "100%";
    if(a004)  a004.style.textAlign = "right";
    if(a005) a005.innerHTML = "לא";
    if(a006) a006.innerHTML = "כן";
    if(a007) a007.innerHTML = "טעינה מחדש";
    if(a008) a008.innerHTML = "סגירה";
    if(a011) a011.innerHTML = "שפה";
    if(a011)  a011.style.textAlign = "right";
    if(a016) a016.innerHTML = "- = מודים = -";
    if(a017) a017.innerHTML = "- = טקסטורות = -";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "אתרי אינטרנט";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "מיינקראפט";
    };
    for (let i = 0; i < a002_set.length; i++) {
      if(a002_set[i].classList.contains("en")) {
        a002_set[i].textContent = "לפתוח באנגלית";
      }else
      if(a002_set[i].classList.contains("ru")) {
        a002_set[i].textContent = "לפתוח ברוסית";
      }else
      if(a002_set[i].classList.contains("he")) {
        a002_set[i].textContent = "לפתוח בעברית";
      }else{
        a002_set[i].textContent = "לפתוח";
      }
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Windhawk";
    };
    for (let i = 0; i < a007_set.length; i++) {
      a007_set[i].textContent = "אפליקציות לאנדרואיד";
    };
  }
  a000.innerHTML = "ArthurVesta";
  document.title = a000.innerHTML;
}