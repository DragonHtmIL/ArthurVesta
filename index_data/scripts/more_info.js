function showInfoSmc() {
  const en = [
    "Snake Mecha Collector 1.4.5-17022026",
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
    "Змея Меха Сборщик 1.4.5-17022026",
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
    "מכה נחש אספן 1.4.5-17022026",
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
function showInfoEc() {
  const en = [
    "Events Creator 1.0.2-latest",
    "This app use HTML, CSS and JS files for display your events.",
    "Project created with Android Studio Panda.",
    "<br>",
    "Supported Languages:",
    "English",
    "Hebrew",
    "Russian",
    "<br>",
    "About this app:",
    "This app allows you to create and manage countdown events for your favorite games or anime releases. You can add events with titles, descriptions, dates, and associated game or anime names or important like go to Doctor. The events will be displayed with a live countdown timer.",
    "This project is gen by AI and is open source.",
    "<br>",
    "Features:",
    "Export events in .json file.",
    "Import events from .json file [This feature will replace existed events that edited after export the .json].",
    "Ignore DND and Silent setting in Edit/Create event for set the events IMPORTANT.",
    "Search between events.",
    "Bright/Dark Themes.",
    "Add link to source site.",
    "Do repeated events by day, month or year (Latest).",
    "<br>",
    "Credits:",
    "App Icon by <a href='https://www.freepik.com/icon/add-event_7477497'>Freepik</a>",
    "Codes: By AI GPT and Gemini.",
    "Ideas: ArthurVesta(DragonHtmIL)."
  ];
  const ru = [
    "Создатель событий 1.0.2-latest",
    "Это приложение использует файлы HTML, CSS и JS для отображения ваших событий.",
    "Проект создан с помощью Android Studio Panda.",
    "<br>",
    "Поддерживаемые языки:",
    "Английский",
    "Иврит",
    "Русский",
    "<br>",
    "О приложении:",
    "Это приложение позволяет создавать и управлять событиями обратного отсчета для ваших любимых игр или релизов аниме. Вы можете добавлять события с названиями, описаниями, датами и связанными именами игр или аниме или важными событиями, такими как поход к врачу. События будут отображаться с живым таймером обратного отсчета.",
    "Этот проект сгенерирован ИИ и является открытым исходным кодом.",
    "<br>",
    "Возможности:",
    "Экспорт событий в файл .json.",
    "Импорт событий из файла .json [Эта функция заменит существующие события, которые были изменены после экспорта файла .json].",
    "Игнорировать настройки DND и Тихий режим при редактировании/создании события для установки событий как Важные.",
    "Поиск между событиями.",
    "Светлые/Темные темы.",
    "Добавить ссылку на сайт источника.",
    "Делать повторяющиеся события по дням, месяцам или годам (Последняя).",
    "<br>",
    "Авторы:",
    "Иконка приложения от <a href='https://www.freepik.com/icon/add-event_7477497'>Freepik</a>",
    "Коды: От ИИ GPT и Gemini.",
    "Идеи: ArthurVesta(DragonHtmIL)."
  ];
  const he = [
    "יוצר אירועים 1.0.2-latest",
    "אפליקציה זו משתמשת בקבצי HTML, CSS ו-JS כדי להציג את האירועים שלך.",
    "הפרויקט נוצר עם Android Studio Panda.",
    "<br>",
    "שפות נתמכות:",
    "אנגלית",
    "עברית",
    "רוסית",
    "<br>",
    "אודות האפליקציה:",
    "אפליקציה זו מאפשרת לך ליצור ולנהל אירועים חזרתיים עבור המשחקים או שחרורי האנימציה המועדפים עליך. ניתן להוסיף אירועים עם כותרות, תיאורים, תאריכים ושמות משחקים או אנימציות מקושרות או אירועים חשובים כמו לגשת לרופא. האירועים יוצגו עם שעון עצר חי.",
    "פרויקט זה נוצר על ידי AI ופתוח.",
    "<br>",
    "תכונות:",
    "יצוא אירועים בקובץ .json.",
    "יבוא אירועים מקובץ .json [תכונה זו תחליף את האירועים הקיימים שונו לאחר יצוא הקובץ .json].",
    "התעלמות מהגדרות DND ושקט בעת עריכת/יצירת אירוע כדי להגדיר את האירועים כחשוב.",
    "חיפוש בין אירועים.",
    " Modiים בהיר/כהה.",
    "הוספת קישור לאתר המקור.",
    "לעשות אירועים חוזרים לפי יום, חודש או שנה (אחרון).",
    "<br>",
    "קרדים:",
    "אייקון אפליקציה על ידי <a href='https://www.freepik.com/icon/add-event_7477497'>Freepik</a>",
    "קודים: על ידי AI GPT ו-Gemini.",
    "רעיונות: ArthurVesta(DragonHtmIL)."
  ];
  var modal = document.getElementById("infoModal");
  var image = document.getElementById("infoImage");
  var title = document.getElementById("infoTitle");
  var content = document.getElementById("infoContent");
  var prog = document.getElementById("infoProgress");
  modal.style.right = "0%";
  image.src = "index_data/textures/icons/events_creator.png";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = en[0];
    content.innerHTML = en[1] + "<br>" + en[2] + "<br>" + en[3] + "<br>" + en[4] + "<br>" + en[5] + "<br>" + en[6] + "<br>" + en[7] + "<br>" + en[8] + "<br>" + en[9] + "<br>" + en[10] + "<br>" + en[11] + "<br>" + en[12] + "<br>" + en[13] + "<br>" + en[14] + "<br>" + en[15] + "<br>" + en[16] + "<br>" + en[17] + "<br>" + en[18] + "<br>" + en[19] + "<br>" + en[20] + "<br>" + en[21] + "<br>" + en[22] + "<br>" + en[23] + "<br>" + en[24] + "<br>" + en[25];
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = ru[0];
    content.innerHTML = ru[1] + "<br>" + ru[2] + "<br>" + ru[3] + "<br>" + ru[4] + "<br>" + ru[5] + "<br>" + ru[6] + "<br>" + ru[7] + "<br>" + ru[8] + "<br>" + ru[9] + "<br>" + ru[10] + "<br>" + ru[11] + "<br>" + ru[12] + "<br>" + ru[13] + "<br>" + ru[14] + "<br>" + ru[15] + "<br>" + ru[16] + "<br>" + ru[17] + "<br>" + ru[18] + "<br>" + ru[19] + "<br>" + ru[20] + "<br>" + ru[21] + "<br>" + ru[22] + "<br>" + ru[23] + "<br>" + ru[24] + "<br>" + ru[25];
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = he[0];
     title.style.direction = "rtl";
     title.style.textAlign = "right";
    content.innerHTML = he[1] + "<br>" + he[2] + "<br>" + he[3] + "<br>" + he[4] + "<br>" + he[5] + "<br>" + he[6] + "<br>" + he[7] + "<br>" + he[8] + "<br>" + he[9] + "<br>" + he[10] + "<br>" + he[11] + "<br>" + he[12] + "<br>" + he[13] + "<br>" + he[14] + "<br>" + he[15] + "<br>" + he[16] + "<br>" + he[17] + "<br>" + he[18] + "<br>" + he[19] + "<br>" + he[20] + "<br>" + he[21] + "<br>" + he[22] + "<br>" + he[23] + "<br>" + he[24] + "<br>" + he[25];
     content.style.direction = "rtl";
     content.style.textAlign = "right";
  };
  prog.style.display = "block";
};
function showInfoSp() {
  const en = [
    "Storage Player 0.1.6-09012026",
    "This is a Player of uploaded files like Videos, Images, Audios and Documents.",
    "ArthurVesta make this minigame with love SMC by coding a lot from 30 minutes-1~2 hours through <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Supports keyboard buttons",
    "ESC, 1-4",
    "Languages",
    " English",
    " Russian",
    " Hebrew",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "This site is with copyfree!",
    "Do not distribute any of scripts!",
    "and this site is free usage;",
    "Have fun!"
  ];
  const ru = [
    "Плеер хранения 0.1.6-09012026",
    "Это проигрыватель загруженных файлов, таких как видео, изображения, аудио и документы.",
    "ArthurVesta создал эту мини-игру с любовью к SMC написав кода много часов за 30 минут -1~2 с помощью <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "Поддерживает кнопки клавиатуры",
    "ESC, 1-4",
    "Языки",
    " Английский",
    " Русский",
    " Иврит",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "Этот сайт с копибесплатный!",
    "Не распространяйте никакие скрипты!",
    "и этот сайт бесплатный для использования;",
    "Веселитьсь!"
  ];
  const he = [
    "נגן אחסון 0.1.6-09012026",
    "זהו נגן של קבצים שהועלו כמו סרטונים, תמונות, שמע ומסמכים.",
    "ArthurVesta יצר את המיני-משחק הזה באהבה SMC על ידי קידוד שעות רבות מ-30 דקות -עד שעה~שעתיים, באמצעות <a href='https://code.visualstudio.com'>Visual Studio Code</a>.",
    "תומך בכפתורי מקלדת",
    "ESC, 1-4",
    "שפות",
    " אנגלית",
    " רוסית",
    " עברית",
    "<img src='https://github.com/user-attachments/assets/9fc9ef63-7696-4ee0-9cb1-be625d87cf9b' style='width: 55px; height: 55px'>",
    "אתר זה הוא עם זכויותחינם!",
    "אין להפיץ שום סקריפטים!",
    "והאתר הזה הוא לשימוש חופשי;",
    "תהנו!"
  ];
  var modal = document.getElementById("infoModal");
  var image = document.getElementById("infoImage");
  var title = document.getElementById("infoTitle");
  var content = document.getElementById("infoContent");
  var prog = document.getElementById("infoProgress");
  modal.style.right = "0%";
  image.src = "index_data/textures/icons/storage_player_2.png";
  if(localStorage.getItem("lang") === "en") {
    title.innerHTML = en[0];
    content.innerHTML = en[1] + "<br>" + en[2] + "<br>" + en[3] + "<br>" + en[4] + "<br>" + en[5] + "<br>" + en[6] + "<br>" + en[7] + "<br>" + en[8] + "<br>" + en[9] + "<br>" + en[10] + "<br>" + en[11] + "<br>" + en[12] + "<br>" + en[13];
  }else
  if(localStorage.getItem("lang") === "ru") {
    title.innerHTML = ru[0];
    content.innerHTML = ru[1] + "<br>" + ru[2] + "<br>" + ru[3] + "<br>" + ru[4] + "<br>" + ru[5] + "<br>" + ru[6] + "<br>" + ru[7] + "<br>" + ru[8] + "<br>" + ru[9] + "<br>" + ru[10] + "<br>" + ru[11] + "<br>" + ru[12] + "<br>" + ru[13];
  }else
  if(localStorage.getItem("lang") === "he") {
    title.innerHTML = he[0];
     title.style.direction = "rtl";
     title.style.textAlign = "right";
    content.innerHTML = he[1] + "<br>" + he[2] + "<br>" + he[3] + "<br>" + he[4] + "<br>" + he[5] + "<br>" + he[6] + "<br>" + he[7] + "<br>" + he[8] + "<br>" + he[9] + "<br>" + he[10] + "<br>" + he[11] + "<br>" + he[12] + "<br>" + he[13];
     content.style.direction = "rtl";
     content.style.textAlign = "right";
  };
  prog.style.display = "block";
}