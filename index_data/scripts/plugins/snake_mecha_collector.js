function loadSmcData() {
  const player = localStorage.getItem("nickname");
  const playerData = document.getElementById("smcName");
  const score = localStorage.getItem("high-score");
  const scoreData = document.getElementById("smcHscore");
  const scoreNum = Number(localStorage.getItem("high-score"));
  const league = document.getElementById("smcLeague");
  const lang = localStorage.getItem("lang");
  const pTitle = document.getElementById("smcPilotTitleCategory");
  const mTitle = document.getElementById("smcMechaTitleCategory");
  const fTitle = document.getElementById("smcFoodTitleCategory");
  const pAya = document.getElementById("ayaGet");
  const pBelladonna = document.getElementById("belladonnaGet");
  const pCyrus = document.getElementById("cyrusGet");
  const pFran = document.getElementById("franGet");
  const pFuranku = document.getElementById("furankuGet");
  const pIori = document.getElementById("ioriGet");
  const pIvan = document.getElementById("ivanGet");
  const pJaka = document.getElementById("jakaGet");
  const pJiuChong = document.getElementById("jiuGet");
  const pJoanna = document.getElementById("joannaGet");
  const pKije = document.getElementById("kijeGet");
  const pKikina = document.getElementById("kikinaGet");
  const pKizunaAi = document.getElementById("kizunaGet");
  const pLillian = document.getElementById("lillianGet");
  const pLysa = document.getElementById("lysaGet");
  const pMatilda = document.getElementById("matildaGet");
  const pMia = document.getElementById("miaGet");
  const pMila = document.getElementById("milaGet");
  const pMobius = document.getElementById("mobiusGet");
  const pNighthawk = document.getElementById("nighthawkGet");
  const pNing = document.getElementById("ningGet");
  const pNorma = document.getElementById("normaGet");
  const pOpal = document.getElementById("opalGet");
  const pPurity = document.getElementById("purityGet");
  const pRed = document.getElementById("redGet");
  const pRiko = document.getElementById("rikoGet");
  const pRom = document.getElementById("romGet");
  const pSerena = document.getElementById("serenaGet");
  const pShin = document.getElementById("shinGet");
  const pSilverDeacon = document.getElementById("silverGet");
  const pTarantula = document.getElementById("tarantulaGet");
  const pVanessa = document.getElementById("vanessaGet");
  const pVillar = document.getElementById("villarGet");
  const pVita = document.getElementById("vitaGet");
  const pYang = document.getElementById("yangGet");
  const pYulia = document.getElementById("yuliaGet");
  const pYutong = document.getElementById("yutongGet");
  const pZoe = document.getElementById("zoeGet");
  const mAkashic = document.getElementById("akashicGet");
  const mAlborada = document.getElementById("alboradaGet");
  const mAndromeda = document.getElementById("andromedaGet");
  const mArthur = document.getElementById("arthurGet");
  const mAurora = document.getElementById("auroraGet");
  const mBoltus = document.getElementById("boltusGet");
  const mCaramel = document.getElementById("caramelGet");
  const mDeathKnell = document.getElementById("deathGet");
  const mDoomlight = document.getElementById("doomlightGet");
  const mDreadwolf = document.getElementById("dreadwolfGet");
  const mFirefox = document.getElementById("firefoxGet");
  const mFirestar = document.getElementById("firestarGet");
  const mFlamenco = document.getElementById("flamencoGet");
  const mGabriel = document.getElementById("gabrielGet");
  const mGaia = document.getElementById("gaiaGet");
  const mGuerillaHunter = document.getElementById("guerillaGet");
  const mHotsteel = document.getElementById("hotsteelGet");
  const mHurricane = document.getElementById("hurricaneGet");
  const mJojo = document.getElementById("jojoGet");
  const mLancelot = document.getElementById("lancelotGet");
  const mMichael = document.getElementById("michaelGet");
  const mMoonRabbit = document.getElementById("moonGet");
  const mNebula = document.getElementById("nebulaGet");
  const mNeutronStar = document.getElementById("neutronGet");
  const mNorthernKnight = document.getElementById("northernGet");
  const mPulsar = document.getElementById("pulsarGet");
  const mRanger = document.getElementById("rangerGet");
  const mRaven = document.getElementById("ravenGet");
  const mShiranui = document.getElementById("shiranuiGet");
  const mSkyfall = document.getElementById("skyfallGet");
  const mSkyfire = document.getElementById("skyfireGet");
  const mSkylark = document.getElementById("skylarkGet");
  const mSnowMirage = document.getElementById("snowGet");
  const mTempest = document.getElementById("tempestGet");
  const mTrioofEnders = document.getElementById("trioGet");
  const mTwilight = document.getElementById("twilightGet");
  const mVentorus = document.getElementById("ventorusGet");
  const mShadowWatcher = document.getElementById("shadowGet");
  const mYellowDwarf = document.getElementById("yellowGet");
  const mCosmicPulse = document.getElementById("cosmicGet");
  const pDjHacker = document.getElementById("djGet");
  const food00 = document.getElementById("collectedMeow");
  const food000 = document.getElementById("collectedGold");
  const food0000 = document.getElementById("collectedAlphacoin");
  const food00000 = document.getElementById("collectedCrystal");
  const food000000 = document.getElementById("collectedVirtualToken");
  const food0 = document.getElementById("collected000Food");
  const food1 = document.getElementById("collected001Food");
  const food2 = document.getElementById("collected002Food");
  const food3 = document.getElementById("collected003Food");
  const food4 = document.getElementById("collected004Food");
  const food5 = document.getElementById("collected005Food");
  const food6 = document.getElementById("collected006Food");
  const food7 = document.getElementById("collected007Food");
  const food8 = document.getElementById("collected008Food");
  const food9 = document.getElementById("collected009Food");
  const food10 = document.getElementById("collected010Food");
  const food11 = document.getElementById("collected011Food");
  const food12 = document.getElementById("collected012Food");
  const food13 = document.getElementById("collected013Food");
  const food14 = document.getElementById("collected014Food");
  const food15 = document.getElementById("collected015Food");
  const food16 = document.getElementById("collected016Food");
  const food17 = document.getElementById("collected017Food");
  const food18 = document.getElementById("collected018Food");
  const food19 = document.getElementById("collected019Food");
  const food20 = document.getElementById("collected020Food");
  const food21 = document.getElementById("collected021Food");
  const food22 = document.getElementById("collected022Food");
  const food23 = document.getElementById("collected023Food");
  const food24 = document.getElementById("collected024Food");
  const food25 = document.getElementById("collected025Food");
  const food26 = document.getElementById("collected026Food");
  const food27 = document.getElementById("collected027Food");
  const food28 = document.getElementById("collected028Food");
  const food29 = document.getElementById("collected029Food");
  const food30 = document.getElementById("collected030Food");
  const food31 = document.getElementById("collected031Food");
  const food32 = document.getElementById("collected032Food");
  const food33 = document.getElementById("collected033Food");
  const food34 = document.getElementById("collected034Food");
  const food35 = document.getElementById("collected035Food");
  const food36 = document.getElementById("collected036Food");
  const food37 = document.getElementById("collected037Food");
  const food38 = document.getElementById("collected038Food");
  const food39 = document.getElementById("collected039Food");
  const food40 = document.getElementById("collected040Food");
  const food41 = document.getElementById("collected041Food");
  const food42 = document.getElementById("collected042Food");
  const food43 = document.getElementById("collected043Food");
  const food44 = document.getElementById("collected044Food");
  const food45 = document.getElementById("collected045Food");
  const food46 = document.getElementById("collected046Food");
  const food47 = document.getElementById("collected047Food");
  const food48 = document.getElementById("collected048Food");
  const food49 = document.getElementById("collected049Food");
  const food50 = document.getElementById("collected050Food");
  const food51 = document.getElementById("collected051Food");
  const food52 = document.getElementById("collected052Food");
  const food53 = document.getElementById("collected053Food");
  const food54 = document.getElementById("collected054Food");
  const food55 = document.getElementById("collected055Food");
  const food56 = document.getElementById("collected056Food");
  const food57 = document.getElementById("collected057Food");
  const food58 = document.getElementById("collected058Food");
  const food59 = document.getElementById("collected059Food");
  const food60 = document.getElementById("collected060Food");
  const food61 = document.getElementById("collected061Food");
  const food62 = document.getElementById("collected062Food");
  const food63 = document.getElementById("collected063Food");
  const food64 = document.getElementById("collected064Food");
  const food65 = document.getElementById("collected065Food");
  const food66 = document.getElementById("collected066Food");
  const food67 = document.getElementById("collected067Food");
  const food68 = document.getElementById("collected068Food");
  const food69 = document.getElementById("collected069Food");
  const food70 = document.getElementById("collected070Food");
  const food71 = document.getElementById("collected071Food");
  const food72 = document.getElementById("collected072Food");
  const food73 = document.getElementById("collected073Food");
  const food74 = document.getElementById("collected074Food");
  const food75 = document.getElementById("collected075Food");
  const food76 = document.getElementById("collected076Food");
  const food77 = document.getElementById("collected077Food");
  if(localStorage.getItem("lang") === "en") {
    if(pTitle) pTitle.innerHTML = "Pilots Category";
    if(mTitle) mTitle.innerHTML = "Mechas Category";
    if(fTitle) fTitle.innerHTML = "Foods Category";
  }else
  if(localStorage.getItem("lang") === "ru") {
    if(pTitle) pTitle.innerHTML = "Категория пилотов";
    if(mTitle) mTitle.innerHTML = "Категория мехов";
    if(fTitle) fTitle.innerHTML = "Категория еды";
  }else
  if(localStorage.getItem("lang") === "he") {
    if(pTitle) pTitle.innerHTML = "קטגוריית טייסים:";
    if(mTitle) mTitle.innerHTML = "קטגוריית מכות:";
    if(fTitle) fTitle.innerHTML = "קטגוריית אוכל:";
    if(pTitle) pTitle.style.direction = "rtl";
    if(pTitle) mTitle.style.textAlign = "right";
    if(mTitle) mTitle.style.direction = "rtl";
    if(mTitle) mTitle.style.textAlign = "right";
    if(fTitle) fTitle.style.direction = "rtl";
    if(fTitle) fTitle.style.textAlign = "right";
  };
  if(localStorage.getItem("lang") === "en") {
    if(player === null || player === "") {
      if(playerData) playerData.innerHTML = "Name:" + "Unnamed";
    }else{
      if(playerData) playerData.innerHTML = "Name:" + player;
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    if(player === null || player === "") {
      if(playerData) playerData.innerHTML = "Имя:" + "Безымянный";
    }else{
      if(playerData) playerData.innerHTML = "Имя:" + player;
    };
  }else
  if(localStorage.getItem("lang") === "he") {
    if(player === null || player === "") {
      if(playerData) playerData.innerHTML = "שם:" + "ללא שם";
      if(playerData) playerData.style.direction = "rtl";
    }else{
      if(playerData) playerData.innerHTML = "שם:" + player;
      if(playerData) playerData.style.direction = "rtl";
    };
  };
  if(localStorage.getItem("lang") === "en") {
    if(localStorage.getItem("high-score") === null || localStorage.getItem("high-score") === 0) {
      if(scoreData) scoreData.innerHTML = "High Score: " + "0";
    }else{
      if(scoreData) scoreData.innerHTML = "High Score: " + score;
    };
  }else
  if(localStorage.getItem("lang") === "ru") {
    if(localStorage.getItem("high-score") === null || localStorage.getItem("high-score") === 0) {
      if(scoreData) scoreData.innerHTML = "Рекорд: " + "0";
    }else{
      if(scoreData) scoreData.innerHTML = "Рекорд: " + score;
    };
  }else
  if(localStorage.getItem("lang") === "he") {
    if(localStorage.getItem("high-score") === null || localStorage.getItem("high-score") === 0) {
      if(scoreData) scoreData.innerHTML = "ניקוד: " + "0";
      if(scoreData) scoreData.style.direction = "rtl";
    }else{
      if(scoreData) scoreData.innerHTML = "ניקוד: " + score;
      if(scoreData) scoreData.style.direction = "rtl";
    };
  };
  if (!score || score === 0) {
    const text = lang === "ru" ? "Нет лиге" : lang === "he" ? "לא בליגה" : "Non league";
    league.innerHTML = text;
    return;
  };
  if(score >= 1 && score <= 10) {
    const text = lang === "ru" ? "Бронзовая лига" : lang === "he" ? "ליגת הארד" : "Bronze League";
    league.innerHTML = text;
  }else
  if(score >= 11 && score <= 20) {
    const text = lang === "ru" ? "Серебряная лига" : lang === "he" ? "ליגת הכסף" : "Silver League";
    league.innerHTML = text;
  }else
  if(score >= 21 && score <= 30) {
    const text = lang === "ru" ? "Серебряная лига" : lang === "he" ? "ליגת הכסף" : "Silver League";
    league.innerHTML = text;
  }else
  if(score >= 31 && score <= 40) {
    const text = lang === "ru" ? "Платиновая лига" : lang === "he" ? "ליגת פלטינה" : "Platinum League";
    league.innerHTML = text;
  }else
  if(score >= 41 && score <= 50) {
    const text = lang === "ru" ? "Алмазная лига" : lang === "he" ? "ליגת היהלום" : "Diamond League";
    league.innerHTML = text;
  }else
  if(score >= 51 && score <= 60) {
    const text = lang === "ru" ? "Супер лига" : lang === "he" ? "ליגת העל" : "Super League";
    league.innerHTML = text;
  }else
  if(score >= 61 && score <= 70) {
    const text = lang === "ru" ? "Легендарная лига" : lang === "he" ? "ליגה האגדית" : "Legendary League";
    league.innerHTML = text;
  }else
  if(score >= 71 && score <= 80) {
    const text = lang === "ru" ? "Альфа Рыцарь" : lang === "he" ? "אביר אלפא" : "Alpha Knight";
    league.innerHTML = text;
  }else
  if (score > 80) {
    const text = lang === "ru" ? "Альфа Рыцарь (МАКС)" : lang === "he" ? "אביר אלפא (מקס)" : "Alpha Knight (MAX)";
    league.innerHTML = text;
  };
  if (!score || score === 0) {
    league.innerHTML += ": 0";
    return;
  };
  if ([1,2,11,12,21,22,31,32,41,42,51,52,61,62,71,72].includes(score)) {
    league.innerHTML += ": 1";
  } else if ([3,4,13,14,23,24,33,34,43,44,53,54,63,64,73,74].includes(score)) {
    league.innerHTML += ": 2";
  } else if ([5,6,15,16,25,26,35,36,45,46,55,56,65,66,75,76].includes(score)) {
    league.innerHTML += ": 3";
  } else if ([7,8,17,18,27,28,37,38,47,48,57,58,67,68,77,78].includes(score)) {
    league.innerHTML += ": 4";
  } else if ([9,10,19,20,29,30,39,40,49,50,59,60,69,70,79,80].includes(score)) {
    league.innerHTML += ": 5";
  } else if (score > 80) {
    const text = lang === "ru" ? "5 (МАКС)" : lang === "he" ? "5 (מקס)" : "5 (MAX)";
    league.innerHTML += ": " + text;
  };
  if(localStorage.getItem("Aya") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pAya) pAya.innerHTML = "Aya: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pAya) pAya.innerHTML = "Ая: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pAya) pAya.innerHTML = "איה: 🔴.";
      if(pAya) pAya.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pAya) pAya.innerHTML = "Aya: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pAya) pAya.innerHTML = "Ая: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pAya) pAya.innerHTML = "איה: 🟢.";
      if(pAya) pAya.style.direction = "rtl";
    };
    if(pAya) pAya.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Belladonna") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pBelladonna) pBelladonna.innerHTML = "Belladonna: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pBelladonna) pBelladonna.innerHTML = "Белладонна: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pBelladonna) pBelladonna.innerHTML = "בלדונה: 🔴.";
      if(pBelladonna) pBelladonna.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pBelladonna) pBelladonna.innerHTML = "Belladonna: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pBelladonna) pBelladonna.innerHTML = "Белладонна: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pBelladonna) pBelladonna.innerHTML = "בלדונה: 🟢.";
      if(pBelladonna) pBelladonna.style.direction = "rtl";
    };
    if(pBelladonna) pBelladonna.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Cyrus") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pCyrus) pCyrus.innerHTML = "Cyrus: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pCyrus) pCyrus.innerHTML = "Сирус: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pCyrus) pCyrus.innerHTML = "סיירוס: 🔴.";
      if(pCyrus) pCyrus.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pCyrus) pCyrus.innerHTML = "Cyrus: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pCyrus) pCyrus.innerHTML = "Сирус: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pCyrus) pCyrus.innerHTML = "סיירוס: 🟢.";
      if(pCyrus) pCyrus.style.direction = "rtl";
    };
    if(pCyrus) pCyrus.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Dj Hacker") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pDjHacker) pDjHacker.innerHTML = "Dj Hacker: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pDjHacker) pDjHacker.innerHTML = "Джидей Хакер: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pDjHacker) pDjHacker.innerHTML = "דיג'יי הקר: 🔴.";
      if(pDjHacker) pDjHacker.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pDjHacker) pDjHacker.innerHTML = "Dj Hacker: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pDjHacker) pDjHacker.innerHTML = "Джидей Хакер: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pDjHacker) pDjHacker.innerHTML = "דיג'יי הקר: 🟢.";
      if(pDjHacker) pDjHacker.style.direction = "rtl";
    };
    if(pDjHacker) pDjHacker.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Fran") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pFran) pFran.innerHTML = "Fran: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pFran) pFran.innerHTML = "Фран: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pFran) pFran.innerHTML = "פרן: 🔴.";
      if(pFran) pFran.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pFran) pFran.innerHTML = "Fran: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pFran) pFran.innerHTML = "Фран: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pFran) pFran.innerHTML = "פרן: 🟢.";
      if(pFran) pFran.style.direction = "rtl";
    };
    if(pFran) pFran.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Furanku") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pFuranku) pFuranku.innerHTML = "Furanku: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pFuranku) pFuranku.innerHTML = "Фуранку: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pFuranku) pFuranku.innerHTML = "furanku: 🔴.";
      if(pFuranku) pFuranku.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pFuranku) pFuranku.innerHTML = "Furanku: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pFuranku) pFuranku.innerHTML = "Фуранку: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pFuranku) pFuranku.innerHTML = "furanku: 🟢.";
      if(pFuranku) pFuranku.style.direction = "rtl";
    };
    if(pFuranku) pFuranku.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Iori") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pIori) pIori.innerHTML = "Iori: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pIori) pIori.innerHTML = "Иори: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pIori) pIori.innerHTML = "אורי: 🔴.";
      if(pIori) pIori.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pIori) pIori.innerHTML = "Iori: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pIori) pIori.innerHTML = "Иори: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pIori) pIori.innerHTML = "אורי: 🟢.";
      if(pIori) pIori.style.direction = "rtl";
    };
    if(pIori) pIori.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Ivan") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pIvan) pIvan.innerHTML = "Ivan: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pIvan) pIvan.innerHTML = "Иван: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pIvan) pIvan.innerHTML = "איוון: 🔴.";
      if(pIvan) pIvan.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pIvan) pIvan.innerHTML = "Ivan: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pIvan) pIvan.innerHTML = "Иван: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pIvan) pIvan.innerHTML = "איוון: 🟢.";
      if(pIvan) pIvan.style.direction = "rtl";
    };
    if(pIvan) pIvan.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Jaka") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pJaka) pJaka.innerHTML = "Jaka: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJaka) pJaka.innerHTML = "Джака: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJaka) pJaka.innerHTML = "ג'קה: 🔴.";
      if(pJaka) pJaka.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pJaka) pJaka.innerHTML = "Jaka: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJaka) pJaka.innerHTML = "Джака: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJaka) pJaka.innerHTML = "ג'קה: 🟢.";
      if(pJaka) pJaka.style.direction = "rtl";
    };
    if(pJaka) pJaka.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Jiu Chong") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pJiuChong) pJiuChong.innerHTML = "Jiu Chong: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJiuChong) pJiuChong.innerHTML = "Джю Чонг: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJiuChong) pJiuChong.innerHTML = "ג'יו צ'ונג: 🔴.";
      if(pJiuChong) pJiuChong.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pJiuChong) pJiuChong.innerHTML = "Jiu Chong: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJiuChong) pJiuChong.innerHTML = "Джю Чонг: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJiuChong) pJiuChong.innerHTML = "ג'יו צ'ונג: 🟢.";
      if(pJiuChong) pJiuChong.style.direction = "rtl";
    };
    if(pJiuChong) pJiuChong.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Joanna") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pJoanna) pJoanna.innerHTML = "Joanna: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJoanna) pJoanna.innerHTML = "Джоанна: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJoanna) pJoanna.innerHTML = "ג'ואנה: 🔴.";
      if(pJoanna) pJoanna.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pJoanna) pJoanna.innerHTML = "Joanna: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pJoanna) pJoanna.innerHTML = "Джоанна: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pJoanna) pJoanna.innerHTML = "ג'ואנה: 🟢.";
      if(pJoanna) pJoanna.style.direction = "rtl";
    };
    if(pJoanna) pJoanna.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Kije") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pKije) pKije.innerHTML = "Kije: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKije) pKije.innerHTML = "Киже: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKije) pKije.innerHTML = "קייג': 🔴.";
      if(pKije) pKije.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pKije) pKije.innerHTML = "Kije: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKije) pKije.innerHTML = "Киже: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKije) pKije.innerHTML = "קייג': 🟢.";
      if(pKije) pKije.style.direction = "rtl";
    };
    if(pKije) pKije.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Kikina") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pKikina) pKikina.innerHTML = "Kikina: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKikina) pKikina.innerHTML = "Кикина: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKikina) pKikina.innerHTML = "קיקינה: 🔴.";
      if(pKikina) pKikina.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pKikina) pKikina.innerHTML = "Kikina: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKikina) pKikina.innerHTML = "Кикина: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKikina) pKikina.innerHTML = "קיקינה: 🟢.";
      if(pKikina) pKikina.style.direction = "rtl";
    };
    if(pKikina) pKikina.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("KizunaAi") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pKizunaAi) pKizunaAi.innerHTML = "Kizuna Ai: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKizunaAi) pKizunaAi.innerHTML = "Кизуна Аи: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKizunaAi) pKizunaAi.innerHTML = "קיזונה אי: 🔴.";
      if(pKizunaAi) pKizunaAi.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pKizunaAi) pKizunaAi.innerHTML = "Kizuna Ai: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pKizunaAi) pKizunaAi.innerHTML = "Кизуна Аи: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pKizunaAi) pKizunaAi.innerHTML = "קיזונה אי: 🟢.";
      if(pKizunaAi) pKizunaAi.style.direction = "rtl";
    };
    if(pKizunaAi) pKizunaAi.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Lillian") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pLillian) pLillian.innerHTML = "Lillian: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pLillian) pLillian.innerHTML = "Лиллиан: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pLillian) pLillian.innerHTML = "ליליאן: 🔴.";
      if(pLillian) pLillian.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pLillian) pLillian.innerHTML = "Lillian: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pLillian) pLillian.innerHTML = "Лиллиан: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pLillian) pLillian.innerHTML = "ליליאן: 🟢.";
      if(pLillian) pLillian.style.direction = "rtl";
    };
    if(pLillian) pLillian.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Lysa") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pLysa) pLysa.innerHTML = "Lysa: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pLysa) pLysa.innerHTML = "Лиза: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pLysa) pLysa.innerHTML = "ליסה: 🔴.";
      if(pLysa) pLysa.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pLysa) pLysa.innerHTML = "Lysa: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pLysa) pLysa.innerHTML = "Лиза: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pLysa) pLysa.innerHTML = "ליסה: 🟢.";
      if(pLysa) pLysa.style.direction = "rtl";
    };
    if(pLysa) pLysa.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Matilda") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pMatilda) pMatilda.innerHTML = "Matilda: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMatilda) pMatilda.innerHTML = "Матильда: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMatilda) pMatilda.innerHTML = "מטילדה: 🔴.";
      if(pMatilda) pMatilda.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pMatilda) pMatilda.innerHTML = "Matilda: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMatilda) pMatilda.innerHTML = "Матильда: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMatilda) pMatilda.innerHTML = "מטילדה: 🟢.";
      if(pMatilda) pMatilda.style.direction = "rtl";
    };
    if(pMatilda) pMatilda.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Mia") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pMia) pMia.innerHTML = "Mia: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMia) pMia.innerHTML = "Мия: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMia) pMia.innerHTML = "מיה: 🔴.";
      if(pMia) pMia.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pMia) pMia.innerHTML = "Mia: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMia) pMia.innerHTML = "Мия: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMia) pMia.innerHTML = "מיה: 🟢.";
      if(pMia) pMia.style.direction = "rtl";
    };
    if(pMia) pMia.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Mia") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pMia) pMia.innerHTML = "Mia: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMia) pMia.innerHTML = "Миа: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMia) pMia.innerHTML = "מיאה: 🔴.";
      if(pMia) pMia.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pMia) pMia.innerHTML = "Mia: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMia) pMia.innerHTML = "Миа: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMia) pMia.innerHTML = "מיאה: 🟢.";
      if(pMia) pMia.style.direction = "rtl";
    };
    if(pMia) pMia.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Mila") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pMila) pMila.innerHTML = "Mila: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMila) pMila.innerHTML = "Мила: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMila) pMila.innerHTML = "מילה: 🔴.";
      if(pMila) pMila.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pMila) pMila.innerHTML = "Mila: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMila) pMila.innerHTML = "Мила: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMila) pMila.innerHTML = "מילה: 🟢.";
      if(pMila) pMila.style.direction = "rtl";
    };
    if(pMila) pMila.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Mobius") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pMobius) pMobius.innerHTML = "Mobius: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMobius) pMobius.innerHTML = "Мобиус: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMobius) pMobius.innerHTML = "מוביוס: 🔴.";
      if(pMobius) pMobius.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pMobius) pMobius.innerHTML = "Mobius: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pMobius) pMobius.innerHTML = "Мобиус: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pMobius) pMobius.innerHTML = "מוביוס: 🟢.";
      if(pMobius) pMobius.style.direction = "rtl";
    };
    if(pMobius) pMobius.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Nighthawk") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pNighthawk) pNighthawk.innerHTML = "Nighthawk: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNighthawk) pNighthawk.innerHTML = "Ночной Ястреб: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNighthawk) pNighthawk.innerHTML = "נץ ליילי: 🔴.";
      if(pNighthawk) pNighthawk.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pNighthawk) pNighthawk.innerHTML = "Nighthawk: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNighthawk) pNighthawk.innerHTML = "Ночной Ястреб: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNighthawk) pNighthawk.innerHTML = "נץ ליילי: 🟢.";
      if(pNighthawk) pNighthawk.style.direction = "rtl";
    };
    if(pNighthawk) pNighthawk.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Ning") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pNing) pNing.innerHTML = "Ning: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNing) pNing.innerHTML = "Нинг: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNing) pNing.innerHTML = "נינג: 🔴.";
      if(pNing) pNing.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pNing) pNing.innerHTML = "Ning: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNing) pNing.innerHTML = "Нинг: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNing) pNing.innerHTML = "נינג: 🟢.";
      if(pNing) pNing.style.direction = "rtl";
    };
    if(pNing) pNing.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Norma") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pNorma) pNorma.innerHTML = "Norma: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNorma) pNorma.innerHTML = "Норма: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNorma) pNorma.innerHTML = "נורמה: 🔴.";
      if(pNorma) pNorma.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pNorma) pNorma.innerHTML = "Norma: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pNorma) pNorma.innerHTML = "Норма: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pNorma) pNorma.innerHTML = "נורמה: 🟢.";
      if(pNorma) pNorma.style.direction = "rtl";
    };
    if(pNorma) pNorma.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Opal") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pOpal) pOpal.innerHTML = "Opal: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pOpal) pOpal.innerHTML = "Опал: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pOpal) pOpal.innerHTML = "אופל: 🔴.";
      if(pOpal) pOpal.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pOpal) pOpal.innerHTML = "Opal: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pOpal) pOpal.innerHTML = "Опал: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pOpal) pOpal.innerHTML = "אופל: 🟢.";
      if(pOpal) pOpal.style.direction = "rtl";
    };
    if(pOpal) pOpal.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Purity") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pPurity) pPurity.innerHTML = "Purity: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pPurity) pPurity.innerHTML = "Пурити: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pPurity) pPurity.innerHTML = "פוריטי: 🔴.";
      if(pPurity) pPurity.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pPurity) pPurity.innerHTML = "Purity: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pPurity) pPurity.innerHTML = "Пурити: 🟢но.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pPurity) pPurity.innerHTML = "פוריטי: 🟢.";
      if(pPurity) pPurity.style.direction = "rtl";
    };
    if(pPurity) pPurity.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("RED") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pRed) pRed.innerHTML = "R.E.D: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRed) pRed.innerHTML = "Р.Е.Д: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRed) pRed.innerHTML = "ר.א.ד: 🔴.";
      if(pRed) pRed.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pRed) pRed.innerHTML = "R.E.D: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRed) pRed.innerHTML = "Р.Е.Д: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRed) pRed.innerHTML = "ר.א.ד: 🟢.";
      if(pRed) pRed.style.direction = "rtl";
    };
    if(pRed) pRed.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Riko") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pRiko) pRiko.innerHTML = "Riko: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRiko) pRiko.innerHTML = "Рико: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRiko) pRiko.innerHTML = "ריקו: 🔴.";
      if(pRiko) pRiko.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pRiko) pRiko.innerHTML = "Riko: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRiko) pRiko.innerHTML = "Рико: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRiko) pRiko.innerHTML = "ריקו: 🟢.";
      if(pRiko) pRiko.style.direction = "rtl";
    };
    if(pRiko) pRiko.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Rom") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pRom) pRom.innerHTML = "Rom: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRom) pRom.innerHTML = "Рико: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRom) pRom.innerHTML = "ריקו: 🔴.";
      if(pRom) pRom.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pRom) pRom.innerHTML = "Rom: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pRom) pRom.innerHTML = "Рико: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pRom) pRom.innerHTML = "ריקו: 🟢.";
      if(pRom) pRom.style.direction = "rtl";
    };
    if(pRom) pRom.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Serena") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pSerena) pSerena.innerHTML = "Serena: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pSerena) pSerena.innerHTML = "Серена: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pSerena) pSerena.innerHTML = "סרנה: 🔴.";
      if(pSerena) pSerena.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pSerena) pSerena.innerHTML = "Serena: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pSerena) pSerena.innerHTML = "Серена: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pSerena) pSerena.innerHTML = "סרנה: 🟢.";
      if(pSerena) pSerena.style.direction = "rtl";
    };
    if(pSerena) pSerena.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Shin") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pShin) pShin.innerHTML = "Shin: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pShin) pShin.innerHTML = "Шин: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pShin) pShin.innerHTML = "שין: 🔴.";
      if(pShin) pShin.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pShin) pShin.innerHTML = "Shin: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pShin) pShin.innerHTML = "Шин: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pShin) pShin.innerHTML = "שין: 🟢.";
      if(pShin) pShin.style.direction = "rtl";
    };
    if(pShin) pShin.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Silver Deacon") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "Silver Deacon: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "Серебряный Дьякон: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "דיקון כסף: 🔴.";
      if(pSilverDeacon) pSilverDeacon.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "Silver Deacon: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "Серебряный Дьякон: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pSilverDeacon) pSilverDeacon.innerHTML = "דיקון כסף: 🟢.";
      if(pSilverDeacon) pSilverDeacon.style.direction = "rtl";
    };
    if(pSilverDeacon) pSilverDeacon.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Tarantula") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pTarantula) pTarantula.innerHTML = "Tarantula: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pTarantula) pTarantula.innerHTML = "Тарантул: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pTarantula) pTarantula.innerHTML = "טרנטולה: 🔴.";
      if(pTarantula) pTarantula.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pTarantula) pTarantula.innerHTML = "Tarantula: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pTarantula) pTarantula.innerHTML = "Тарантул: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pTarantula) pTarantula.innerHTML = "טרנטולה: 🟢.";
      if(pTarantula) pTarantula.style.direction = "rtl";
    };
    if(pTarantula) pTarantula.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Vanessa") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pVanessa) pVanessa.innerHTML = "Vanessa: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVanessa) pVanessa.innerHTML = "Ванесса: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVanessa) pVanessa.innerHTML = "ונסה: 🔴.";
      if(pVanessa) pVanessa.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pVanessa) pVanessa.innerHTML = "Vanessa: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVanessa) pVanessa.innerHTML = "Ванесса: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVanessa) pVanessa.innerHTML = "ונסה: 🟢.";
      if(pVanessa) pVanessa.style.direction = "rtl";
    };
    if(pVanessa) pVanessa.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Villar") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pVillar) pVillar.innerHTML = "Villar: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVillar) pVillar.innerHTML = "Виллар: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVillar) pVillar.innerHTML = "וילאר: 🔴.";
      if(pVillar) pVillar.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pVillar) pVillar.innerHTML = "Villar: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVillar) pVillar.innerHTML = "Виллар: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVillar) pVillar.innerHTML = "וילאר: 🟢.";
      if(pVillar) pVillar.style.direction = "rtl";
    };
    if(pVillar) pVillar.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Vita") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pVita) pVita.innerHTML = "Vita: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVita) pVita.innerHTML = "Вита: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVita) pVita.innerHTML = "ויטה: 🔴.";
      if(pVita) pVita.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pVita) pVita.innerHTML = "Vita: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pVita) pVita.innerHTML = "Вита: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pVita) pVita.innerHTML = "ויטה: 🟢.";
      if(pVita) pVita.style.direction = "rtl";
    };
    if(pVita) pVita.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Yang") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pYang) pYang.innerHTML = "Yang: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYang) pYang.innerHTML = "Янг: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYang) pYang.innerHTML = "יאנג: 🔴.";
      if(pYang) pYang.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pYang) pYang.innerHTML = "Yang: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYang) pYang.innerHTML = "Янг: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYang) pYang.innerHTML = "יאנג: 🟢.";
      if(pYang) pYang.style.direction = "rtl";
    };
    if(pYang) pYang.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Yulia") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pYulia) pYulia.innerHTML = "Yulia: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYulia) pYulia.innerHTML = "Юлия: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYulia) pYulia.innerHTML = "יוליה: 🔴.";
      if(pYulia) pYulia.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pYulia) pYulia.innerHTML = "Yulia: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYulia) pYulia.innerHTML = "Юлия: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYulia) pYulia.innerHTML = "יוליה: 🟢.";
      if(pYulia) pYulia.style.direction = "rtl";
    };
    if(pYulia) pYulia.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Yutong") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pYutong) pYutong.innerHTML = "Yutong: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYutong) pYutong.innerHTML = "Ютонг: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYutong) pYutong.innerHTML = "יוטונג: 🔴.";
      if(pYutong) pYutong.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pYutong) pYutong.innerHTML = "Yutong: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pYutong) pYutong.innerHTML = "Ютонг: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pYutong) pYutong.innerHTML = "יוטונג: 🟢.";
      if(pYutong) pYutong.style.direction = "rtl";
    };
    if(pYutong) pYutong.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Zoe") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(pZoe) pZoe.innerHTML = "Zoe: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pZoe) pZoe.innerHTML = "Зои: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pZoe) pZoe.innerHTML = "זואי: 🔴.";
      if(pZoe) pZoe.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(pZoe) pZoe.innerHTML = "Zoe: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(pZoe) pZoe.innerHTML = "Зои: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(pZoe) pZoe.innerHTML = "זואי: 🟢.";
      if(pZoe) pZoe.style.direction = "rtl";
    };
    if(pZoe) pZoe.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Akashic") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mAkashic) mAkashic.innerHTML = "Akashic: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAkashic) mAkashic.innerHTML = "Акашик: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAkashic) mAkashic.innerHTML = "אקשיכ: 🔴.";
      if(mAkashic) mAkashic.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mAkashic) mAkashic.innerHTML = "Akashic: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAkashic) mAkashic.innerHTML = "Акашик: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAkashic) mAkashic.innerHTML = "אקשיכ: 🟢.";
      if(mAkashic) mAkashic.style.direction = "rtl";
    };
    if(mAkashic) mAkashic.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Alborada") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mAlborada) mAlborada.innerHTML = "Alborada: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAlborada) mAlborada.innerHTML = "Альборада: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAlborada) mAlborada.innerHTML = "אלבורדה: 🔴.";
      if(mAlborada) mAlborada.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mAlborada) mAlborada.innerHTML = "Alborada: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAlborada) mAlborada.innerHTML = "Альборада: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAlborada) mAlborada.innerHTML = "אלבורדה: 🟢.";
      if(mAlborada) mAlborada.style.direction = "rtl";
    };
    if(mAlborada) mAlborada.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Andromeda") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mAndromeda) mAndromeda.innerHTML = "Andromeda: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAndromeda) mAndromeda.innerHTML = "Андромеда: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAndromeda) mAndromeda.innerHTML = "אנדרומדה: 🔴.";
      if(mAndromeda) mAndromeda.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mAndromeda) mAndromeda.innerHTML = "Andromeda: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAndromeda) mAndromeda.innerHTML = "Андромеда: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAndromeda) mAndromeda.innerHTML = "אנדרומדה: 🟢.";
      if(mAndromeda) mAndromeda.style.direction = "rtl";
    };
    if(mAndromeda) mAndromeda.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Arthur") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mArthur) mArthur.innerHTML = "Arthur: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mArthur) mArthur.innerHTML = "Артур: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mArthur) mArthur.innerHTML = "ארתור: 🔴.";
      if(mArthur) mArthur.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mArthur) mArthur.innerHTML = "Arthur: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mArthur) mArthur.innerHTML = "Артур: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mArthur) mArthur.innerHTML = "ארתור: 🟢.";
      if(mArthur) mArthur.style.direction = "rtl";
    };
    if(mArthur) mArthur.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Aurora") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mAurora) mAurora.innerHTML = "Aurora: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAurora) mAurora.innerHTML = "Аврора: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAurora) mAurora.innerHTML = "אורורה: 🔴.";
      if(mAurora) mAurora.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mAurora) mAurora.innerHTML = "Aurora: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mAurora) mAurora.innerHTML = "Аврора: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mAurora) mAurora.innerHTML = "אורורה: 🟢.";
      if(mAurora) mAurora.style.direction = "rtl";
    };
    if(mAurora) mAurora.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Cosmic Pulse") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "Aurora: Cosmic Pulse: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "Аврора: Космический импульс: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "אורורה: פעמון קוסמי: 🔴.";
      if(mCosmicPulse) mCosmicPulse.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "Aurora: Cosmic Pulse: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "Аврора: Космический импульс: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mCosmicPulse) mCosmicPulse.innerHTML = "אורורה: פעמון קוסמי: 🟢.";
      if(mCosmicPulse) mCosmicPulse.style.direction = "rtl";
    };
    if(mCosmicPulse) mCosmicPulse.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Boltus") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mBoltus) mBoltus.innerHTML = "Boltus: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mBoltus) mBoltus.innerHTML = "Болтус: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mBoltus) mBoltus.innerHTML = "בולטוס: 🔴.";
      if(mBoltus) mBoltus.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mBoltus) mBoltus.innerHTML = "Boltus: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mBoltus) mBoltus.innerHTML = "Болтус: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mBoltus) mBoltus.innerHTML = "בולטוס: 🟢.";
      if(mBoltus) mBoltus.style.direction = "rtl";
    };
    if(mBoltus) mBoltus.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Caramel") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mCaramel) mCaramel.innerHTML = "Caramel: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mCaramel) mCaramel.innerHTML = "Карамель: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mCaramel) mCaramel.innerHTML = "קרמל: 🔴.";
      if(mCaramel) mCaramel.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mCaramel) mCaramel.innerHTML = "Caramel: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mCaramel) mCaramel.innerHTML = "Карамель: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mCaramel) mCaramel.innerHTML = "קרמל: 🟢.";
      if(mCaramel) mCaramel.style.direction = "rtl";
    };
    if(mCaramel) mCaramel.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Death Knell") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mDeathKnell) mDeathKnell.innerHTML = "Death Knell: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDeathKnell) mDeathKnell.innerHTML = "Погребальный звон: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDeathKnell) mDeathKnell.innerHTML = "קת המוות: 🔴.";
      if(mDeathKnell) mDeathKnell.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mDeathKnell) mDeathKnell.innerHTML = "Death Knell: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDeathKnell) mDeathKnell.innerHTML = "Погребальный звон: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDeathKnell) mDeathKnell.innerHTML = "קת המוות: 🟢.";
      if(mDeathKnell) mDeathKnell.style.direction = "rtl";
    };
    if(mDeathKnell) mDeathKnell.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Doomlight") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mDoomlight) mDoomlight.innerHTML = "Doomlight: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDoomlight) mDoomlight.innerHTML = "Думлайт: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDoomlight) mDoomlight.innerHTML = "דומלייט: 🔴.";
      if(mDoomlight) mDoomlight.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mDoomlight) mDoomlight.innerHTML = "Doomlight: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDoomlight) mDoomlight.innerHTML = "Думлайт: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDoomlight) mDoomlight.innerHTML = "דומלייט: 🟢.";
      if(mDoomlight) mDoomlight.style.direction = "rtl";
    };
    if(mDoomlight) mDoomlight.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Dreadwolf") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mDreadwolf) mDreadwolf.innerHTML = "Dreadwolf: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDreadwolf) mDreadwolf.innerHTML = "Дредвулф: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDreadwolf) mDreadwolf.innerHTML = "דרידוולף: 🔴.";
      if(mDreadwolf) mDreadwolf.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mDreadwolf) mDreadwolf.innerHTML = "Dreadwolf: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mDreadwolf) mDreadwolf.innerHTML = "Дредвулф: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mDreadwolf) mDreadwolf.innerHTML = "דרידוולף: 🟢.";
      if(mDreadwolf) mDreadwolf.style.direction = "rtl";
    };
    if(mDreadwolf) mDreadwolf.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Firefox") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mFirefox) mFirefox.innerHTML = "Firefox: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFirefox) mFirefox.innerHTML = "Файрфокс: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFirefox) mFirefox.innerHTML = "פיירפוקס: 🔴.";
      if(mFirefox) mFirefox.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mFirefox) mFirefox.innerHTML = "Firefox: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFirefox) mFirefox.innerHTML = "Файрфокс: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFirefox) mFirefox.innerHTML = "פיירפוקס: 🟢.";
      if(mFirefox) mFirefox.style.direction = "rtl";
    };
    if(mFirefox) mFirefox.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Firestar") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mFirestar) mFirestar.innerHTML = "Firestar: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFirestar) mFirestar.innerHTML = "Файрстар: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFirestar) mFirestar.innerHTML = "פיירסטאר: 🔴.";
      if(mFirestar) mFirestar.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mFirestar) mFirestar.innerHTML = "Firestar: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFirestar) mFirestar.innerHTML = "Файрстар: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFirestar) mFirestar.innerHTML = "פיירסטאר: 🟢.";
      if(mFirestar) mFirestar.style.direction = "rtl";
    };
    if(mFirestar) mFirestar.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Flamenco") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mFlamenco) mFlamenco.innerHTML = "Flamenco: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFlamenco) mFlamenco.innerHTML = "Фламенко: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFlamenco) mFlamenco.innerHTML = "פלמנקו: 🔴.";
      if(mFlamenco) mFlamenco.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mFlamenco) mFlamenco.innerHTML = "Flamenco: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mFlamenco) mFlamenco.innerHTML = "Фламенко: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mFlamenco) mFlamenco.innerHTML = "פלמנקו: 🟢.";
      if(mFlamenco) mFlamenco.style.direction = "rtl";
    };
    if(mFlamenco) mFlamenco.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Gabriel") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mGabriel) mGabriel.innerHTML = "Gabriel: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGabriel) mGabriel.innerHTML = "Габриэль: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGabriel) mGabriel.innerHTML = "גבריאל: 🔴.";
      if(mGabriel) mGabriel.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mGabriel) mGabriel.innerHTML = "Gabriel: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGabriel) mGabriel.innerHTML = "Габриэль: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGabriel) mGabriel.innerHTML = "גבריאל: 🟢.";
      if(mGabriel) mGabriel.style.direction = "rtl";
    };
    if(mGabriel) mGabriel.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Gaia") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mGaia) mGaia.innerHTML = "Gaia: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGaia) mGaia.innerHTML = "Гайя: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGaia) mGaia.innerHTML = "גאיה: 🔴.";
      if(mGaia) mGaia.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mGaia) mGaia.innerHTML = "Gaia: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGaia) mGaia.innerHTML = "Гайя: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGaia) mGaia.innerHTML = "גאיה: 🟢.";
      if(mGaia) mGaia.style.direction = "rtl";
    };
    if(mGaia) mGaia.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Guerilla Hunter") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "Guerilla Hunter: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "Партизан Охотник: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "צייד גרילה: 🔴.";
      if(mGuerillaHunter) mGuerillaHunter.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "Guerilla Hunter: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "Партизан Охотник: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mGuerillaHunter) mGuerillaHunter.innerHTML = "צייד גרילה: 🟢.";
      if(mGuerillaHunter) mGuerillaHunter.style.direction = "rtl";
    };
    if(mGuerillaHunter) mGuerillaHunter.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Hotsteel") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mHotsteel) mHotsteel.innerHTML = "Hotsteel: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mHotsteel) mHotsteel.innerHTML = "Хотстил: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mHotsteel) mHotsteel.innerHTML = "הוטסטיל: 🔴.";
      if(mHotsteel) mHotsteel.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mHotsteel) mHotsteel.innerHTML = "Hotsteel: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mHotsteel) mHotsteel.innerHTML = "Хотстил: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mHotsteel) mHotsteel.innerHTML = "הוטסטיל: 🟢.";
      if(mHotsteel) mHotsteel.style.direction = "rtl";
    };
    if(mHotsteel) mHotsteel.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Hurricane") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mHurricane) mHurricane.innerHTML = "Hurricane: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mHurricane) mHurricane.innerHTML = "Ураган: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mHurricane) mHurricane.innerHTML = "הוריקן: 🔴.";
      if(mHurricane) mHurricane.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mHurricane) mHurricane.innerHTML = "Hurricane: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mHurricane) mHurricane.innerHTML = "Ураган: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mHurricane) mHurricane.innerHTML = "הוריקן: 🟢.";
      if(mHurricane) mHurricane.style.direction = "rtl";
    };
    if(mHurricane) mHurricane.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("JOJO") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mJojo) mJojo.innerHTML = "JOJO: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mJojo) mJojo.innerHTML = "ДЖОДЖО: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mJojo) mJojo.innerHTML = "ג'וג'ו: 🔴.";
      if(mJojo) mJojo.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mJojo) mJojo.innerHTML = "JOJO: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mJojo) mJojo.innerHTML = "ДЖОДЖО: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mJojo) mJojo.innerHTML = "ג'וג'ו: 🟢.";
      if(mJojo) mJojo.style.direction = "rtl";
    };
    if(mJojo) mJojo.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Lancelot") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mLancelot) mLancelot.innerHTML = "Lancelot: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mLancelot) mLancelot.innerHTML = "Ланселот: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mLancelot) mLancelot.innerHTML = "לנסלוט: 🔴.";
      if(mLancelot) mLancelot.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mLancelot) mLancelot.innerHTML = "Lancelot: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mLancelot) mLancelot.innerHTML = "Ланселот: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mLancelot) mLancelot.innerHTML = "לנסלוט: 🟢.";
      if(mLancelot) mLancelot.style.direction = "rtl";
    };
    if(mLancelot) mLancelot.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Michael") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mMichael) mMichael.innerHTML = "Michael: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mMichael) mMichael.innerHTML = "Михаэль: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mMichael) mMichael.innerHTML = "מיכאל: 🔴.";
      if(mMichael) mMichael.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mMichael) mMichael.innerHTML = "Michael: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mMichael) mMichael.innerHTML = "Михаэль: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mMichael) mMichael.innerHTML = "מיכאל: 🟢.";
      if(mMichael) mMichael.style.direction = "rtl";
    };
    if(mMichael) mMichael.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Moon Rabbit") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "Moon Rabbit: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "Лунный Кролик: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "ארנב ירח: 🔴.";
      if(mMoonRabbit) mMoonRabbit.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "Moon Rabbit: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "Лунный Кролик: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mMoonRabbit) mMoonRabbit.innerHTML = "ארנב ירח: 🟢.";
      if(mMoonRabbit) mMoonRabbit.style.direction = "rtl";
    };
    if(mMoonRabbit) mMoonRabbit.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Nebula") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mNebula) mNebula.innerHTML = "Nebula: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNebula) mNebula.innerHTML = "Небула: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNebula) mNebula.innerHTML = "נבולה: 🔴.";
      if(mNebula) mNebula.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mNebula) mNebula.innerHTML = "Nebula: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNebula) mNebula.innerHTML = "Небула: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNebula) mNebula.innerHTML = "נבולה: 🟢.";
      if(mNebula) mNebula.style.direction = "rtl";
    };
    if(mNebula) mNebula.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Neutron Star") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mNeutronStar) mNeutronStar.innerHTML = "Neutron Star: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNeutronStar) mNeutronStar.innerHTML = "Нейтронная Звезда: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNeutronStar) mNeutronStar.innerHTML = "כוכב ניוטרון: 🔴.";
      if(mNeutronStar) mNeutronStar.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mNeutronStar) mNeutronStar.innerHTML = "Neutron Star: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNeutronStar) mNeutronStar.innerHTML = "Нейтронная Звезда: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNeutronStar) mNeutronStar.innerHTML = "כוכב ניוטרון: 🟢.";
      if(mNeutronStar) mNeutronStar.style.direction = "rtl";
    };
    if(mNeutronStar) mNeutronStar.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Northern Knight") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "Northern Knight: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "Северный Рыцарь: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "אביר צפוני: 🔴.";
      if(mNorthernKnight) mNorthernKnight.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "Northern Knight: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "Северный Рыцарь: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mNorthernKnight) mNorthernKnight.innerHTML = "אביר צפוני: 🟢.";
      if(mNorthernKnight) mNorthernKnight.style.direction = "rtl";
    };
    if(mNorthernKnight) mNorthernKnight.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Pulsar") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mPulsar) mPulsar.innerHTML = "Pulsar: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mPulsar) mPulsar.innerHTML = "Пульсар: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mPulsar) mPulsar.innerHTML = "פולסר: 🔴.";
      if(mPulsar) mPulsar.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mPulsar) mPulsar.innerHTML = "Pulsar: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mPulsar) mPulsar.innerHTML = "Пульсар: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mPulsar) mPulsar.innerHTML = "פולסר: 🟢.";
      if(mPulsar) mPulsar.style.direction = "rtl";
    };
    if(mPulsar) mPulsar.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Yellow Dwarf") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "Pulsar: Yellow Dwarf: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "Пульсар: Жёлтый Гном: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "פולסר: גמד צהוב: 🔴.";
      if(mYellowDwarf) mYellowDwarf.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "Pulsar: Yellow Dwarf: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "Пульсар: Жёлтый Гном: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mYellowDwarf) mYellowDwarf.innerHTML = "פולסר: גמד צהוב: 🟢.";
      if(mYellowDwarf) mYellowDwarf.style.direction = "rtl";
    };
    if(mYellowDwarf) mYellowDwarf.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Ranger") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mRanger) mRanger.innerHTML = "Ranger: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mRanger) mRanger.innerHTML = "Рейнджер: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mRanger) mRanger.innerHTML = "ריינג'ר: 🔴.";
      if(mRanger) mRanger.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mRanger) mRanger.innerHTML = "Ranger: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mRanger) mRanger.innerHTML = "Рейнджер: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mRanger) mRanger.innerHTML = "ריינג'ר: 🟢.";
      if(mRanger) mRanger.style.direction = "rtl";
    };
    if(mRanger) mRanger.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Raven") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mRaven) mRaven.innerHTML = "Raven: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mRaven) mRaven.innerHTML = "Ворона: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mRaven) mRaven.innerHTML = "עורב: 🔴.";
      if(mRaven) mRaven.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mRaven) mRaven.innerHTML = "Raven: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mRaven) mRaven.innerHTML = "Ворона: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mRaven) mRaven.innerHTML = "עורב: 🟢.";
      if(mRaven) mRaven.style.direction = "rtl";
    };
    if(mRaven) mRaven.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Shadow Watcher") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "Raven: Shadow Watcher: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "Ворона: Теневой Страж: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "עורב: צופה צללים: 🔴.";
      if(mShadowWatcher) mShadowWatcher.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "Raven: Shadow Watcher: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "Ворона: Теневой Страж: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mShadowWatcher) mShadowWatcher.innerHTML = "עורב: צופה צללים: 🟢.";
      if(mShadowWatcher) mShadowWatcher.style.direction = "rtl";
    };
    if(mShadowWatcher) mShadowWatcher.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Shiranui") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mShiranui) mShiranui.innerHTML = "Shiranui: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mShiranui) mShiranui.innerHTML = "Ширануи: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mShiranui) mShiranui.innerHTML = "שיראנוי: 🔴.";
      if(mShiranui) mShiranui.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mShiranui) mShiranui.innerHTML = "Shiranui: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mShiranui) mShiranui.innerHTML = "Ширануи: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mShiranui) mShiranui.innerHTML = "שיראנוי: 🟢.";
      if(mShiranui) mShiranui.style.direction = "rtl";
    };
    if(mShiranui) mShiranui.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Skyfall") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mSkyfall) mSkyfall.innerHTML = "Skyfall: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkyfall) mSkyfall.innerHTML = "Скайфолл: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkyfall) mSkyfall.innerHTML = "סקייפול: 🔴.";
      if(mSkyfall) mSkyfall.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mSkyfall) mSkyfall.innerHTML = "Skyfall: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkyfall) mSkyfall.innerHTML = "Скайфолл: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkyfall) mSkyfall.innerHTML = "סקייפול: 🟢.";
      if(mSkyfall) mSkyfall.style.direction = "rtl";
    };
    if(mSkyfall) mSkyfall.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Skyfire") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mSkyfire) mSkyfire.innerHTML = "Skyfire: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkyfire) mSkyfire.innerHTML = "Скайфайр: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkyfire) mSkyfire.innerHTML = "סקייפייר: 🔴.";
      if(mSkyfire) mSkyfire.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mSkyfire) mSkyfire.innerHTML = "Skyfire: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkyfire) mSkyfire.innerHTML = "Скайфайр: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkyfire) mSkyfire.innerHTML = "סקייפייר: 🟢.";
      if(mSkyfire) mSkyfire.style.direction = "rtl";
    };
    if(mSkyfire) mSkyfire.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Skylark") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mSkylark) mSkylark.innerHTML = "Skylark: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkylark) mSkylark.innerHTML = "Скайларк: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkylark) mSkylark.innerHTML = "סקיילארק: 🔴.";
      if(mSkylark) mSkylark.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mSkylark) mSkylark.innerHTML = "Skylark: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSkylark) mSkylark.innerHTML = "Скайларк: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSkylark) mSkylark.innerHTML = "סקיילארק: 🟢.";
      if(mSkylark) mSkylark.style.direction = "rtl";
    };
    if(mSkylark) mSkylark.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Snow Mirage") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mSnowMirage) mSnowMirage.innerHTML = "Snow Mirage: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSnowMirage) mSnowMirage.innerHTML = "Снежный Мираж: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSnowMirage) mSnowMirage.innerHTML = "מיראז' השלג: 🔴.";
      if(mSnowMirage) mSnowMirage.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mSnowMirage) mSnowMirage.innerHTML = "Snow Mirage: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mSnowMirage) mSnowMirage.innerHTML = "Снежный Мираж: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mSnowMirage) mSnowMirage.innerHTML = "מיראז' השלג: 🟢.";
      if(mSnowMirage) mSnowMirage.style.direction = "rtl";
    };
    if(mSnowMirage) mSnowMirage.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Tempest") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mTempest) mTempest.innerHTML = "Tempest: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTempest) mTempest.innerHTML = "Темпест: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTempest) mTempest.innerHTML = "טמפסט: 🔴.";
      if(mTempest) mTempest.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mTempest) mTempest.innerHTML = "Tempest: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTempest) mTempest.innerHTML = "Темпест: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTempest) mTempest.innerHTML = "טמפסט: 🟢.";
      if(mTempest) mTempest.style.direction = "rtl";
    };
    if(mTempest) mTempest.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Trio of Enders") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "Trio of Enders: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "Трио Эндеров: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "שלישייה של אנדרים: 🔴.";
      if(mTrioofEnders) mTrioofEnders.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "Trio of Enders: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "Трио Эндеров: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTrioofEnders) mTrioofEnders.innerHTML = "שלישייה של אנדרים: 🟢.";
      if(mTrioofEnders) mTrioofEnders.style.direction = "rtl";
    };
    if(mTrioofEnders) mTrioofEnders.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Twilight") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mTwilight) mTwilight.innerHTML = "Twilight: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTwilight) mTwilight.innerHTML = "Сумерки: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTwilight) mTwilight.innerHTML = "דמדום: 🔴.";
      if(mTwilight) mTwilight.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mTwilight) mTwilight.innerHTML = "Twilight: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mTwilight) mTwilight.innerHTML = "Сумерки: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mTwilight) mTwilight.innerHTML = "דמדום: 🟢.";
      if(mTwilight) mTwilight.style.direction = "rtl";
    };
    if(mTwilight) mTwilight.style.color = "var(--border-active)";
  };
  if(localStorage.getItem("Ventorus") === null) {
    if(localStorage.getItem("lang") === "en") {
      if(mVentorus) mVentorus.innerHTML = "Ventorus: 🔴.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mVentorus) mVentorus.innerHTML = "Венторус: 🔴.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mVentorus) mVentorus.innerHTML = "ונטורוס: 🔴.";
      if(mVentorus) mVentorus.style.direction = "rtl";
    };
  }else{
    if(localStorage.getItem("lang") === "en") {
      if(mVentorus) mVentorus.innerHTML = "Ventorus: 🟢.";
    }else
    if(localStorage.getItem("lang") === "ru") {
      if(mVentorus) mVentorus.innerHTML = "Венторус: 🟢.";
    }else
    if(localStorage.getItem("lang") === "he") {
      if(mVentorus) mVentorus.innerHTML = "ונטורוס: 🟢.";
      if(mVentorus) mVentorus.style.direction = "rtl";
    };
    if(mVentorus) mVentorus.style.color = "var(--border-active)";
  };
  if(food00) food00.innerHTML = localStorage.getItem("meawTokenStorage") || 0;
  if(food000) food000.innerHTML = localStorage.getItem("goldStorage") || 0;
  if(food0000) food0000.innerHTML = localStorage.getItem("alphaCoinStorage") || 0;
  if(food00000) food00000.innerHTML = localStorage.getItem("crystalStorage") || 0;
  if(food000000) food000000.innerHTML = localStorage.getItem("virtualTokenStorage") || 0;
  if(food0) food0.innerHTML = localStorage.getItem("food000Storage") || 0;
  if(food1) food1.innerHTML = localStorage.getItem("food001Storage") || 0;
  if(food2) food2.innerHTML = localStorage.getItem("food002Storage") || 0;
  if(food3) food3.innerHTML = localStorage.getItem("food003Storage") || 0;
  if(food4) food4.innerHTML = localStorage.getItem("food004Storage") || 0;
  if(food5) food5.innerHTML = localStorage.getItem("food005Storage") || 0;
  if(food6) food6.innerHTML = localStorage.getItem("food006Storage") || 0;
  if(food7) food7.innerHTML = localStorage.getItem("food007Storage") || 0;
  if(food8) food8.innerHTML = localStorage.getItem("food008Storage") || 0;
  if(food9) food9.innerHTML = localStorage.getItem("food009Storage") || 0;
  if(food10) food10.innerHTML = localStorage.getItem("food010Storage") || 0;
  if(food11) food11.innerHTML = localStorage.getItem("food011Storage") || 0;
  if(food12) food12.innerHTML = localStorage.getItem("food012Storage") || 0;
  if(food13) food13.innerHTML = localStorage.getItem("food013Storage") || 0;
  if(food14) food14.innerHTML = localStorage.getItem("food014Storage") || 0;
  if(food15) food15.innerHTML = localStorage.getItem("food015Storage") || 0;
  if(food16) food16.innerHTML = localStorage.getItem("food016Storage") || 0;
  if(food17) food17.innerHTML = localStorage.getItem("food017Storage") || 0;
  if(food18) food18.innerHTML = localStorage.getItem("food018Storage") || 0;
  if(food19) food19.innerHTML = localStorage.getItem("food019Storage") || 0;
  if(food20) food20.innerHTML = localStorage.getItem("food020Storage") || 0;
  if(food21) food21.innerHTML = localStorage.getItem("food021Storage") || 0;
  if(food22) food22.innerHTML = localStorage.getItem("food022Storage") || 0;
  if(food23) food23.innerHTML = localStorage.getItem("food023Storage") || 0;
  if(food24) food24.innerHTML = localStorage.getItem("food024Storage") || 0;
  if(food25) food25.innerHTML = localStorage.getItem("food025Storage") || 0;
  if(food26) food26.innerHTML = localStorage.getItem("food026Storage") || 0;
  if(food27) food27.innerHTML = localStorage.getItem("food027Storage") || 0;
  if(food28) food28.innerHTML = localStorage.getItem("food028Storage") || 0;
  if(food29) food29.innerHTML = localStorage.getItem("food029Storage") || 0;
  if(food30) food30.innerHTML = localStorage.getItem("food030Storage") || 0;
  if(food31) food31.innerHTML = localStorage.getItem("food031Storage") || 0;
  if(food32) food32.innerHTML = localStorage.getItem("food032Storage") || 0;
  if(food33) food33.innerHTML = localStorage.getItem("food033Storage") || 0;
  if(food34) food34.innerHTML = localStorage.getItem("food034Storage") || 0;
  if(food35) food35.innerHTML = localStorage.getItem("food035Storage") || 0;
  if(food36) food36.innerHTML = localStorage.getItem("food036Storage") || 0;
  if(food37) food37.innerHTML = localStorage.getItem("food037Storage") || 0;
  if(food38) food38.innerHTML = localStorage.getItem("food038Storage") || 0;
  if(food39) food39.innerHTML = localStorage.getItem("food039Storage") || 0;
  if(food40) food40.innerHTML = localStorage.getItem("food040Storage") || 0;
  if(food41) food41.innerHTML = localStorage.getItem("food041Storage") || 0;
  if(food42) food42.innerHTML = localStorage.getItem("food042Storage") || 0;
  if(food43) food43.innerHTML = localStorage.getItem("food043Storage") || 0;
  if(food44) food44.innerHTML = localStorage.getItem("food044Storage") || 0;
  if(food45) food45.innerHTML = localStorage.getItem("food045Storage") || 0;
  if(food46) food46.innerHTML = localStorage.getItem("food046Storage") || 0;
  if(food47) food47.innerHTML = localStorage.getItem("food047Storage") || 0;
  if(food48) food48.innerHTML = localStorage.getItem("food048Storage") || 0;
  if(food49) food49.innerHTML = localStorage.getItem("food049Storage") || 0;
  if(food50) food50.innerHTML = localStorage.getItem("food050Storage") || 0;
  if(food51) food51.innerHTML = localStorage.getItem("food051Storage") || 0;
  if(food52) food52.innerHTML = localStorage.getItem("food052Storage") || 0;
  if(food53) food53.innerHTML = localStorage.getItem("food053Storage") || 0;
  if(food54) food54.innerHTML = localStorage.getItem("food054Storage") || 0;
  if(food55) food55.innerHTML = localStorage.getItem("food055Storage") || 0;
  if(food56) food56.innerHTML = localStorage.getItem("food056Storage") || 0;
  if(food57) food57.innerHTML = localStorage.getItem("food057Storage") || 0;
  if(food58) food58.innerHTML = localStorage.getItem("food058Storage") || 0;
  if(food59) food59.innerHTML = localStorage.getItem("food059Storage") || 0;
  if(food60) food60.innerHTML = localStorage.getItem("food060Storage") || 0;
  if(food61) food61.innerHTML = localStorage.getItem("food061Storage") || 0;
  if(food62) food62.innerHTML = localStorage.getItem("food062Storage") || 0;
  if(food63) food63.innerHTML = localStorage.getItem("food063Storage") || 0;
  if(food64) food64.innerHTML = localStorage.getItem("food064Storage") || 0;
  if(food65) food65.innerHTML = localStorage.getItem("food065Storage") || 0;
  if(food66) food66.innerHTML = localStorage.getItem("food066Storage") || 0;
  if(food67) food67.innerHTML = localStorage.getItem("food067Storage") || 0;
  if(food68) food68.innerHTML = localStorage.getItem("food068Storage") || 0;
  if(food69) food69.innerHTML = localStorage.getItem("food069Storage") || 0;
  if(food70) food70.innerHTML = localStorage.getItem("food070Storage") || 0;
  if(food71) food71.innerHTML = localStorage.getItem("food071Storage") || 0;
  if(food72) food72.innerHTML = localStorage.getItem("food072Storage") || 0;
  if(food73) food73.innerHTML = localStorage.getItem("food073Storage") || 0;
  if(food74) food74.innerHTML = localStorage.getItem("food074Storage") || 0;
  if(food75) food75.innerHTML = localStorage.getItem("food075Storage") || 0;
  if(food76) food76.innerHTML = localStorage.getItem("food076Storage") || 0;
  if(food77) food77.innerHTML = localStorage.getItem("food077Storage") || 0;
}