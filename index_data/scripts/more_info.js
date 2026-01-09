function showInfoSmc() {
  const en = [
    "Snake Mecha Collector 1.3.8-06012026",
    "This is a classic Snake Game but with SMC styles.",
    "ArthurVesta make this minigame with love SMC by coding a lot from 30 minutes-1~2 hours through <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Supports keyboard buttons",
    "Supports Mouse Gestures",
    "Supports Touch Gestures",
    "Can be customized:",
    "Food",
    "Snake",
    "0-9, a-z and A-Z",
    "Color",
    "Position",
    "Board",
    "Audio",
    "Background Music",
    "Snake Walk sounds",
    "Languages",
    " English",
    " Russian",
    " Hebrew",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "This site is with copyrights!",
    "Do not distribute any of content, only share the game link to friends or peoples!",
    "and this site is free usage;",
    "Have fun!"
  ];
  const ru = [
    "Змея Меха Сборщик 1.3.8-06012026",
    "Это классическая игра «Змейка», но в стиле SMC.",
    "ArthurVesta создал эту мини-игру с любовью к SMC написав кода много часов за 30 минут -1~2 с помощью <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Поддерживает кнопки клавиатуры",
    "Поддерживает жесты мыши",
    "Поддерживает сенсорные жесты",
    "Можно настроить:",
    "Еда",
    "Змея",
    "0-9, a-z и A-Z",
    "Цвет",
    "Позиция",
    "Доска",
    "Аудио",
    "Фоновая музыка",
    "Звуки ходьбы змея",
    "Языки",
    " Английский",
    " Русский",
    " Иврит",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "Этот сайт защищен авторскими правами!",
    "Не распространяйте никакой контент, только делитесь ссылкой на игру с друзьями или людьми!",
    "и этот сайт бесплатный для использования;",
    "Веселитьсь!"
  ];
  const he = [
    "מכה נחש אספן 1.3.8-06012026",
    "זהו משחק נחש קלאסי אבל עם סגנונות SMC.",
    "ArthurVesta יצר את המיני-משחק הזה באהבה SMC על ידי קידוד שעות רבות מ-30 דקות -עד שעה~שעתיים, באמצעות <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "תומך בכפתורי מקלדת",
    "תומך בתנועות עכבר",
    "תומך במחוות מגע",
    "ניתן להתאמה אישית:",
    "מזון",
    "נחש",
    "0-9, a-z וA-Z",
    "צבע",
    "מיקום",
    "לוח",
    "שמע",
    "מוזיקת ​​רקע",
    "צלילי הליכה של הנחש",
    "שפות",
    " אנגלית",
    " רוסית",
    " עברית",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "אתר זה מוגן בזכויות יוצרים!",
    "אין להפיץ תוכן כלשהו, ​​אלא לשתף רק את קישור המשחק עם חברים או אנשים אחרים!",
    "והאתר הזה הוא לשימוש חופשי;",
    "תהנו!"
  ];
  var modal = document.getElementById("infoModal");
  var image = document.getElementById("infoImage");
  var title = document.getElementById("infoTitle");
  var content = document.getElementById("infoContent");
  var prog = document.getElementById("infoProgress");
  modal.style.right = "0%";
  image.src = "index_data/textures/icons/smc.png";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = en[0];
    content.innerHTML = en[1] + "<br>" + en[2] + "<br>" + en[3] + "<br>" + en[4] + "<br>" + en[5] + "<br>" + en[6] + "<br>" + en[7] + "<br>" + en[8] + "<br>" + en[9] + "<br>" + en[10] + "<br>" + en[11] + "<br>" + en[12] + "<br>" + en[13] + "<br>" + en[14] + "<br>" + en[15] + "<br>" + en[16] + "<br>" + en[17] + "<br>" + en[18] + "<br>" + en[19] + "<br>" + en[20] + "<br>" + en[21] + "<br>" + en[22] + "<br>" + en[23] + "<br>" + en[24];
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = ru[0];
    content.innerHTML = ru[1] + "<br>" + ru[2] + "<br>" + ru[3] + "<br>" + ru[4] + "<br>" + ru[5] + "<br>" + ru[6] + "<br>" + ru[7] + "<br>" + ru[8] + "<br>" + ru[9] + "<br>" + ru[10] + "<br>" + ru[11] + "<br>" + ru[12] + "<br>" + ru[13] + "<br>" + ru[14] + "<br>" + ru[15] + "<br>" + ru[16] + "<br>" + ru[17] + "<br>" + ru[18] + "<br>" + ru[19] + "<br>" + ru[20] + "<br>" + ru[21] + "<br>" + ru[22] + "<br>" + ru[23] + "<br>" + ru[24];
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = he[0];
     title.style.direction = "rtl";
     title.style.textAlign = "right";
    content.innerHTML = he[1] + "<br>" + he[2] + "<br>" + he[3] + "<br>" + he[4] + "<br>" + he[5] + "<br>" + he[6] + "<br>" + he[7] + "<br>" + he[8] + "<br>" + he[9] + "<br>" + he[10] + "<br>" + he[11] + "<br>" + he[12] + "<br>" + he[13] + "<br>" + he[14] + "<br>" + he[15] + "<br>" + he[16] + "<br>" + he[17] + "<br>" + he[18] + "<br>" + he[19] + "<br>" + he[20] + "<br>" + he[21] + "<br>" + he[22] + "<br>" + he[23] + "<br>" + he[24];
     content.style.direction = "rtl";
     content.style.textAlign = "right";
  };
  prog.style.display = "block";
};
function showInfoSp() {
  const en = [
    "Snake Mecha Collector 1.3.8-06012026",
    "This is a classic Snake Game but with SMC styles.",
    "ArthurVesta make this minigame with love SMC by coding a lot from 30 minutes-1~2 hours through <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Supports keyboard buttons",
    "Supports Mouse Gestures",
    "Supports Touch Gestures",
    "Can be customized:",
    "Food",
    "Snake",
    "0-9, a-z and A-Z",
    "Color",
    "Position",
    "Board",
    "Audio",
    "Background Music",
    "Snake Walk sounds",
    "Languages",
    " English",
    " Russian",
    " Hebrew",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "This site is with copyrights!",
    "Do not distribute any of content, only share the game link to friends or peoples!",
    "and this site is free usage;",
    "Have fun!"
  ];
  const ru = [
    "Змея Меха Сборщик 1.3.8-06012026",
    "Это классическая игра «Змейка», но в стиле SMC.",
    "ArthurVesta создал эту мини-игру с любовью к SMC написав кода много часов за 30 минут -1~2 с помощью <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Поддерживает кнопки клавиатуры",
    "Поддерживает жесты мыши",
    "Поддерживает сенсорные жесты",
    "Можно настроить:",
    "Еда",
    "Змея",
    "0-9, a-z и A-Z",
    "Цвет",
    "Позиция",
    "Доска",
    "Аудио",
    "Фоновая музыка",
    "Звуки ходьбы змея",
    "Языки",
    " Английский",
    " Русский",
    " Иврит",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "Этот сайт защищен авторскими правами!",
    "Не распространяйте никакой контент, только делитесь ссылкой на игру с друзьями или людьми!",
    "и этот сайт бесплатный для использования;",
    "Веселитьсь!"
  ];
  const he = [
    "מכה נחש אספן 1.3.8-06012026",
    "זהו משחק נחש קלאסי אבל עם סגנונות SMC.",
    "ArthurVesta יצר את המיני-משחק הזה באהבה SMC על ידי קידוד שעות רבות מ-30 דקות -עד שעה~שעתיים, באמצעות <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "תומך בכפתורי מקלדת",
    "תומך בתנועות עכבר",
    "תומך במחוות מגע",
    "ניתן להתאמה אישית:",
    "מזון",
    "נחש",
    "0-9, a-z וA-Z",
    "צבע",
    "מיקום",
    "לוח",
    "שמע",
    "מוזיקת ​​רקע",
    "צלילי הליכה של הנחש",
    "שפות",
    " אנגלית",
    " רוסית",
    " עברית",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "אתר זה מוגן בזכויות יוצרים!",
    "אין להפיץ תוכן כלשהו, ​​אלא לשתף רק את קישור המשחק עם חברים או אנשים אחרים!",
    "והאתר הזה הוא לשימוש חופשי;",
    "תהנו!"
  ];
  var modal = document.getElementById("infoModal");
  var image = document.getElementById("infoImage");
  var title = document.getElementById("infoTitle");
  var content = document.getElementById("infoContent");
  var prog = document.getElementById("infoProgress");
  modal.style.right = "0%";
  image.src = "index_data/textures/icons/smc.png";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = en[0];
    content.innerHTML = en[1] + "<br>" + en[2] + "<br>" + en[3] + "<br>" + en[4] + "<br>" + en[5] + "<br>" + en[6] + "<br>" + en[7] + "<br>" + en[8] + "<br>" + en[9] + "<br>" + en[10] + "<br>" + en[11] + "<br>" + en[12] + "<br>" + en[13] + "<br>" + en[14] + "<br>" + en[15] + "<br>" + en[16] + "<br>" + en[17] + "<br>" + en[18] + "<br>" + en[19] + "<br>" + en[20] + "<br>" + en[21] + "<br>" + en[22] + "<br>" + en[23] + "<br>" + en[24];
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = ru[0];
    content.innerHTML = ru[1] + "<br>" + ru[2] + "<br>" + ru[3] + "<br>" + ru[4] + "<br>" + ru[5] + "<br>" + ru[6] + "<br>" + ru[7] + "<br>" + ru[8] + "<br>" + ru[9] + "<br>" + ru[10] + "<br>" + ru[11] + "<br>" + ru[12] + "<br>" + ru[13] + "<br>" + ru[14] + "<br>" + ru[15] + "<br>" + ru[16] + "<br>" + ru[17] + "<br>" + ru[18] + "<br>" + ru[19] + "<br>" + ru[20] + "<br>" + ru[21] + "<br>" + ru[22] + "<br>" + ru[23] + "<br>" + ru[24];
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = he[0];
     title.style.direction = "rtl";
     title.style.textAlign = "right";
    content.innerHTML = he[1] + "<br>" + he[2] + "<br>" + he[3] + "<br>" + he[4] + "<br>" + he[5] + "<br>" + he[6] + "<br>" + he[7] + "<br>" + he[8] + "<br>" + he[9] + "<br>" + he[10] + "<br>" + he[11] + "<br>" + he[12] + "<br>" + he[13] + "<br>" + he[14] + "<br>" + he[15] + "<br>" + he[16] + "<br>" + he[17] + "<br>" + he[18] + "<br>" + he[19] + "<br>" + he[20] + "<br>" + he[21] + "<br>" + he[22] + "<br>" + he[23] + "<br>" + he[24];
     content.style.direction = "rtl";
     content.style.textAlign = "right";
  };
  prog.style.display = "block";
}