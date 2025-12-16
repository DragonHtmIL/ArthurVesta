function loadTexts() {
  var a000 = document.getElementById("titleHeader");
  var a001 = document.getElementById("settingsLang");
  var a002 = document.getElementById("menuTitle");
  var a003 = document.getElementById("applySettings");
  var a004 = document.getElementById("adminToolsLang");
  var a005 = document.getElementById("alertCancel");
  var a006 = document.getElementById("alertConfirm");
  var a007 = document.getElementById("reloadPageBtn");
  var a008 = document.getElementById("closePageBtn");
  var a009 = document.getElementById("smcName");
  var a010 = document.getElementById("smcContent");
  var a011 = document.getElementById("sLsLang");
  var a012 = document.getElementById("csName");
  var a013 = document.getElementById("csContent");
  var a014 = document.getElementById("sp2Name");
  var a015 = document.getElementById("sp2Content");
  var a016 = document.getElementById("modsLang");
  var a017 = document.getElementById("texturesLang");
  var a018 = document.getElementById("alName");
  var a019 = document.getElementById("alContent");
  var a020 = document.getElementById("bdomName");
  var a021 = document.getElementById("bdomContent");
  var a022 = document.getElementById("mcLang");
  var a023 = document.getElementById("gomName");
  var a024 = document.getElementById("gomContent");
  var a025 = document.getElementById("aseName");
  var a026 = document.getElementById("aseContent");
  var a027 = document.getElementById("epS24uName");
  var a028 = document.getElementById("epS24uContent");
  var a029 = document.getElementById("mcIlName");
  var a030 = document.getElementById("mcIlContent");
  var a031 = document.getElementById("bsmcName");
  var a032 = document.getElementById("bsmcContent");
  var a033 = document.getElementById("spdcName");
  var a034 = document.getElementById("spdcContent");
  /////////////////////////////////Sets/////////////////////////////////
  const a000_set = document.getElementsByClassName("websLang");
  const a001_set = document.getElementsByClassName("mcLang");
  const a002_set = document.getElementsByClassName("open-btn");
  const a003_set = document.getElementsByClassName("down-btn-zip");
  const a004_set = document.getElementsByClassName("down-btn-jar");
  const a005_set = document.getElementsByClassName("bsLang");

  if(localStorage.getItem("lang") === "en") {
    a001.innerHTML = "Settings";
    a002.innerHTML = "Menu";
    a003.innerHTML = "Apply";
    a004.innerHTML = "Developments";
    a005.innerHTML = "No";
    a006.innerHTML = "Yes";
    a007.innerHTML = "Reload";
    a008.innerHTML = "Close";
    a009.innerHTML = "Snake Mecha Collectors";
    a010.innerHTML = "A classic Snake Game with customizations of SMC.";
    a011.innerHTML = "Language";
    a012.innerHTML = "Copperserative";
    a013.innerHTML = "Adding copper age to minecraft from newer version.";
    a013.innerHTML += "<br>";
    a013.innerHTML += "<strong>Required game version: Forge 1.20.1.</strong>";
    a014.innerHTML = "Storage Player";
    a015.innerHTML = "View your Images, Videos, Audios and Documents in your device.";
    a016.innerHTML = "- = Mods = -";
    a017.innerHTML = "- = Textures = -";
    a018.innerHTML = "Azurland";
    a019.innerHTML = "A darker dimension similar to overworld.";
    a019.innerHTML += "<br>";
    a019.innerHTML += "<strong>Required game version: Forge 1.20.1.</strong>";
    a020.innerHTML = "Better Discs of Minecraft";
    a021.innerHTML = "Adding more discs from a newer versions of Minecraft.";
    a021.innerHTML += "<br>";
    a021.innerHTML += "<strong>Required game version: Forge 1.20.1.</strong>";
    a022.innerHTML += " 1.20.1 and Forge";
    a023.innerHTML = "Gems of Minecraft";
    a024.innerHTML = "Adding more gems to minecraft.";
    a024.innerHTML += "<br>";
    a024.innerHTML += "<strong>Required game version: Forge 1.20.1.</strong>";
    a025.innerHTML = "AppleSkin's Earth";
    a026.innerHTML = "This texture addon for texture <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>Earth GUI</a> and mod <a href='https://www.curseforge.com/minecraft/mc-mods/appleskin'>AppleSkin</a>.";
    a026.innerHTML += "<br>";
    a026.innerHTML += "<strong>Required game version: 1.20.1 and mod <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>AppleSkin</a>.</strong>";
    a027.innerHTML = "Eyephone S24 Ultra";
    a028.innerHTML = "This texture change the model for Eyephone in mod <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a> to S24 Ultra.";
    a028.innerHTML += "<br>";
    a028.innerHTML += "<strong>Required game version: 1.20.1 and mod <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a>.</strong>";
    a029.innerHTML = "Minecraft is Latest";
    a030.innerHTML = "This texture is default look of Minecraft (25w31a) also models of entities.";
    a030.innerHTML += "<br>";
    a030.innerHTML += "<strong>Required game version: 1.20.1 and <a href='http://adfoc.us/serve/sitelinks/?id=475250&url=http://optifine.net/adloadx?f=OptiFine_1.20.1_HD_U_I6.jar&x=7239'>OptiFine</a>.</strong>";
    a031.innerHTML = "Minecraft 1.21.9";
    a032.innerHTML = "This theme is default look of Minecraft for Block Story game and with HD version.";
    a032.innerHTML += "<br>";
    a032.innerHTML += "<strong>Required game version: 13.3.4.2-13.3.3.</strong>";
    a033.innerHTML = "SMC Pack DC";
    a034.innerHTML = "Simple library of SMC Wallpapers, Avatars and Stickers for Discord or something else.";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Websites";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Minecraft";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "Open";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Download (ZIP)";
    };
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "Download (JAR)";
    };
    for (let i = 0; i < a005_set.length; i++) {
      a005_set[i].textContent = "Block Story";
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    a001.innerHTML = "Настройки";
    a002.innerHTML = "Меню";
    a003.innerHTML = "Применять";
    a004.innerHTML = "Разработки";
    a005.innerHTML = "Нет";
    a006.innerHTML = "Да";
    a007.innerHTML = "Перезагрузить";
    a008.innerHTML = "Закрыть";
    a009.innerHTML = "Змея Меха Сборщик";
    a010.innerHTML = "Классическая игра Змейка с настройками SMC.";
    a011.innerHTML = "Язык";
    a012.innerHTML = "Copperserative";
    a013.innerHTML = "Добавление медного века в майнкрафт из новой версии.";
    a013.innerHTML += "<br>";
    a013.innerHTML += "<strong>Требуемая версия игры: Forge 1.20.1.</strong>";
    a014.innerHTML = "Проигрыватель Хранилище 2";
    a015.innerHTML = "Просмотр изображений, видео, аудио и документов в вашем устройстве.";
    a016.innerHTML = "- = Моды = -";
    a017.innerHTML = "- = Текстуры = -";
    a018.innerHTML = "Azurland";
    a019.innerHTML = "Более тёмное измерение, похожее на верхний мир.";
    a019.innerHTML += "<br>";
    a019.innerHTML += "<strong>Требуемая версия игры: Forge 1.20.1.</strong>";
    a020.innerHTML = "Лучшие диски Minecraft";
    a021.innerHTML = "Добавление дисков из новых версий Minecraft.";
    a021.innerHTML += "<br>";
    a021.innerHTML += "<strong>Требуемая версия игры: Forge 1.20.1.</strong>";
    a022.innerHTML += " 1.20.1 и Forge";
    a023.innerHTML = "Драгоценные камни Майнкрафта";
    a024.innerHTML = "Добавление больше драгоценных камней в майнкрафт.";
    a024.innerHTML += "<br>";
    a024.innerHTML += "<strong>Требуемая версия игры: Forge 1.20.1.</strong>";
    a025.innerHTML = "AppleSkin's Earth";
    a026.innerHTML = "Этот текстурный аддон для текстуры <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>Earth GUI</a> и мод <a href='https://www.curseforge.com/minecraft/mc-mods/appleskin'>AppleSkin</a>.";
    a026.innerHTML += "<br>";
    a026.innerHTML += "<strong>Требуемая версия игры: 1.20.1 и мод <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>AppleSkin</a>.</strong>";
    a027.innerHTML = "Eyephone S24 Ultra";
    a028.innerHTML = "Эта текстура меняет модель для Eyephone в моде <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a> в S24 Ultra.";
    a028.innerHTML += "<br>";
    a028.innerHTML += "<strong>Требуемая версия игры: 1.20.1 и мод <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a>.</strong>";
    a029.innerHTML = "Minecraft is Latest";
    a030.innerHTML = "Эта текстура — стандартный вид Minecraft (25w31a), а также модели сущностей.";
    a030.innerHTML += "<br>";
    a030.innerHTML += "<strong>Требуемая версия игры: 1.20.1 и <a href='http://adfoc.us/serve/sitelinks/?id=475250&url=http://optifine.net/adloadx?f=OptiFine_1.20.1_HD_U_I6.jar&x=7239'>OptiFine</a>.</strong>";
    a031.innerHTML = "Minecraft 1.21.9";
    a032.innerHTML = "Эта тема является стандартным оформлением Minecraft для игры Block Story и имеет HD-версию..";
    a032.innerHTML += "<br>";
    a032.innerHTML += "<strong>Требуемая версия игры: 13.3.4.2-13.3.3.</strong>";
    a033.innerHTML = "SMC Pack DC";
    a034.innerHTML = "Простая библиотека обоев, аватаров и стикеров SMC для Discord или чего-либо еще.";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "Веб-сайты";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "Майнкрафт";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "Открыть";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "Загрузить (ZIP)";
    };
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "Загрузить (JAR)";
    };
    for (let i = 0; i < a005_set.length; i++) {
      a005_set[i].textContent = "Block Story";
    };
  }else
  if(localStorage.getItem("lang") === "he") {
    a001.innerHTML = "הגדרות";
    a002.innerHTML = "תפריט";
    a003.innerHTML = "אישור";
    a004.innerHTML = "התפתחויות";
    a005.innerHTML = "לא";
    a006.innerHTML = "כן";
    a007.innerHTML = "טעינה מחדש";
    a008.innerHTML = "סגירה";
     a004.style.width = "100%";
     a004.style.textAlign = "right";
    a009.innerHTML = "מכה נחש אספן";
     a009.style.textAlign = "right";
    a010.innerHTML = "משחק נחשים קלאסי עם התאמות אישיות של SMC.";
     a010.style.direction = "rtl";
     a010.style.textAlign = "right";
    a011.innerHTML = "שפה";
     a011.style.textAlign = "right";
    a012.innerHTML = "Copperserative";
    a013.innerHTML = "הוספת עידן הנחושת למיינקראפט מגרסה חדשה יותר.";
    a013.innerHTML += "<br>";
    a013.innerHTML += "<strong>נדרשת גרסת משחק: Forge 1.20.1.</strong>";
     a013.style.direction = "rtl";
     a013.style.textAlign = "right";
    a014.innerHTML = "נגן אכסון 2";
     a014.style.direction = "rtl";
     a014.style.textAlign = "right";
    a015.innerHTML = "צפה בתמונות, בסרטונים, בקבצי האודיו ובמסמכים שלך במכשיר שלך.";
     a015.style.direction = "rtl";
     a015.style.textAlign = "right";
    a016.innerHTML = "- = מודים = -";
    a017.innerHTML = "- = טקסטורות = -";
    a018.innerHTML = "Azurland";
    a019.innerHTML = "מימד כהה יותר הדומה לעולם העליון.";
    a019.innerHTML += "<br>";
    a019.innerHTML += "<strong>נדרשת גרסת משחק: Forge 1.20.1.</strong>";
     a019.style.direction = "rtl";
     a019.style.textAlign = "right";
    a020.innerHTML = "דיסקים טובים יותר של מיינקראפט";
     a020.style.textAlign = "right";
    a021.innerHTML = "הוספת דיסקים נוספים מגרסאות חדשות יותר של Minecraft.";
    a021.innerHTML += "<br>";
    a021.innerHTML += "<strong>נדרשת גרסת משחק: Forge 1.20.1.</strong>";
     a021.style.direction = "rtl";
     a021.style.textAlign = "right";
    a022.innerHTML += " 1.20.1 וForge";
     a022.style.direction = "rtl";
    a023.innerHTML = "אבני חן של מיינקראפט";
     a023.style.textAlign = "right";
    a024.innerHTML = "הוספת עוד אבני חן למיינקראפט.";
    a024.innerHTML += "<br>";
    a024.innerHTML += "<strong>נדרשת גרסת משחק: Forge 1.20.1.</strong>";
     a024.style.direction = "rtl";
     a024.style.textAlign = "right";
    a025.innerHTML = "AppleSkin's Earth";
    a026.innerHTML = "תוסף טקסטורה זה עבור טקסטורה <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>Earth GUI</a> ומוד <a href='https://www.curseforge.com/minecraft/mc-mods/appleskin'>AppleSkin</a>.";
    a026.innerHTML += "<br>";
    a026.innerHTML += "<strong>נדרשת גרסת משחק: 1.20.1 ומוד <a href='https://www.curseforge.com/minecraft/texture-packs/earth-gui'>AppleSkin</a>.</strong>";
     a026.style.direction = "rtl";
     a026.style.textAlign = "right";
    a027.innerHTML = "Eyephone S24 Ultra";
    a028.innerHTML = "הטקסטורה הזו משנה את המודל עבור Eyephone במוד <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a> לS24 Ultra.";
    a028.innerHTML += "<br>";
    a028.innerHTML += "<strong>נדרשת גרסת משחק: 1.20.1 ומוד <a href='https://www.curseforge.com/minecraft/mc-mods/eyemod-phone'>(Forge, 1.20.1) EyeMod - A Working Phone in Minecraft</a>.</strong>";
     a028.style.direction = "rtl";
     a028.style.textAlign = "right";
    a029.innerHTML = "Minecraft is Latest";
    a030.innerHTML = "טקסטורה זו היא מראה ברירת המחדל של מיינקראפט (25w31a) וגם מודלים של ישויות.";
    a030.innerHTML += "<br>";
    a030.innerHTML += "<strong>נדרשת גרסת משחק: 1.20.1 ו<a href='http://adfoc.us/serve/sitelinks/?id=475250&url=http://optifine.net/adloadx?f=OptiFine_1.20.1_HD_U_I6.jar&x=7239'>OptiFine</a>.</strong>";
     a030.style.direction = "rtl";
     a030.style.textAlign = "right";
    a031.innerHTML = "Minecraft 1.21.9";
    a032.innerHTML = "ערכת נושא זו היא מראה ברירת המחדל של Minecraft עבור המשחק Block Story ועם גרסת HD.";
    a032.innerHTML += "<br>";
    a032.innerHTML += "<strong>נדרשת גרסת משחק: 13.3.4.2-13.3.3.</strong>";
     a032.style.direction = "rtl";
     a032.style.textAlign = "right";
    a033.innerHTML = "SMC Pack DC";
    a034.innerHTML = "ספרייה פשוטה של ​​טפטים, אווטארים ומדבקות של SMC עבור Discord או משהו אחר.";
     a034.style.direction = "rtl";
     a034.style.textAlign = "right";
    /////////////////////////////////Sets/////////////////////////////////
    for (let i = 0; i < a000_set.length; i++) {
      a000_set[i].textContent = "אתרי אינטרנט";
    };
    for (let i = 0; i < a001_set.length; i++) {
      a001_set[i].textContent = "מיינקראפט";
    };
    for (let i = 0; i < a002_set.length; i++) {
      a002_set[i].textContent = "לפתוח";
    };
    for (let i = 0; i < a003_set.length; i++) {
      a003_set[i].textContent = "הורדה (ZIP)";
      a003_set[i].style.direction = "rtl";
    };
    for (let i = 0; i < a004_set.length; i++) {
      a004_set[i].textContent = "הורדה (JAR)";
      a004_set[i].style.direction = "rtl";
    };
    for (let i = 0; i < a005_set.length; i++) {
      a005_set[i].textContent = "Block Story";
    };
  }
  a000.innerHTML = "ArthurVesta";
  document.title = a000.innerHTML;
}