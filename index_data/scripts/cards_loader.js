const infoFiles = [
  "index_data/info/AV_Gems_of_Minecraft_1.20.1/info.json",
  "index_data/info/AV_OpenFletching/info.json",
  "index_data/info/av.mnts.eventscreator/info.json",
  "index_data/info/eyephone-k-on-screen-animation-example/info.json",
  "index_data/info/eyephone-s24-ultra-titanium-black/info.json",
  "index_data/info/eyephone-s24-ultra-trailblazer-edition/info.json",
  "index_data/info/eyephone-s24-ultra-tv/info.json",
  "index_data/info/mnts.dc.org/info.json",
  "index_data/info/mnts.memorycards.org/info.json",
  "index_data/info/mnts.rbcb.org/info.json",
  "index_data/info/mnts.smc.org/info.json",
  "index_data/info/mnts.sp.org/info.json"
];
const sectionDefinitions = [
  {
    id: "modsSubTitle",
    texts: {
      en: "- = Mods = -",
      ru: "- = Моды = -",
      he: "- = מודים = -"
    }
  },
  {
    id: "texturesSubTitle",
    texts: {
      en: "- = Textures = -",
      ru: "- = Текстуры = -",
      he: "- = טקסטורות = -"
    }
  }
];
function getLanguageValue(info, field) {
  const language = localStorage.getItem("lang") || "en";
  return info[`${field}_${language}`] ?? info[`${field}_en`] ?? "";
};
function hasField(info, field) {
  return Array.isArray(info[field]) && info[field].includes(field);
};
function createCard(info) {
  const card = document.createElement("div");
  card.className = "card";
  const iconFrame = document.createElement("div");
  iconFrame.className = "card-icon-frame";
  const image = document.createElement("img");
  image.src = info.image_path_from_main + info.image_name;
  image.alt = info.image_alt || "";
  image.className = info.image_class || "card-icon";
  const contentFrame = document.createElement("div");
  contentFrame.className = "card-content-frame";
  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = getLanguageValue(info, "name");
  const content = document.createElement("div");
  content.className = "card-content";
  const description = document.createElement("div");
  description.textContent = getLanguageValue(info, "description");
  const descriptionField = `description_${localStorage.getItem("lang") || "en"}`;
  if (hasField(info, descriptionField)) {
    description.dir = "rtl";
  }
  if (Array.isArray(info[`requreds_${localStorage.getItem("lang") || "en"}`])) {
    const requirements = info[`requreds_${localStorage.getItem("lang") || "en"}`]
      .filter(Boolean);
    if (requirements.length > 0) {
      const list = document.createElement("ul");
      for (const requirement of requirements) {
        const item = document.createElement("li");
        item.textContent = requirement;
        list.appendChild(item);
      }
      if (hasField(info, `requreds_${localStorage.getItem("lang") || "en"}`)) {
        list.dir = "rtl";
      }
      content.append(description, list);
    } else {
      content.appendChild(description);
    }
  } else {
    content.appendChild(description);
  }
  const buttonsFrame = document.createElement("div");
  buttonsFrame.className = "card-buttons-frame";
  const button = document.createElement("button");
  button.className = info.linker_class || "open-btn";
  button.textContent = getOpenText();
  button.addEventListener("click", () => {
    window.open(info.link, "_blank", "noopener,noreferrer");
  });
  iconFrame.appendChild(image);
  buttonsFrame.appendChild(button);
  contentFrame.append(title, content, buttonsFrame);
  card.append(iconFrame, contentFrame);
  return card;
};
function getOpenText() {
  const language = localStorage.getItem("lang") || "en";
  return {
    en: "Open",
    ru: "Открыть",
    he: "לפתוח"
  }[language];
};
function createSectionTitle(section) {
  const title = document.createElement("h3");
  title.id = section.id;
  title.className = "sub-titles";
  const language = localStorage.getItem("lang") || "en";
  title.textContent = section.texts[language] || section.texts.en;
  return title;
};
async function loadCards() {
  const results = await Promise.all(
    infoFiles.map(async (file) => {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`Could not load ${file}`);
      }
      return response.json();
    })
  );
  const cardsByCategory = new Map();
  for (const info of results) {
    if (!cardsByCategory.has(info.card_categore)) {
      cardsByCategory.set(info.card_categore, []);
    }
    cardsByCategory.get(info.card_categore).push(info);
  }
  for (const [categoryId, cards] of cardsByCategory) {
    const container = document.getElementById(categoryId);
    if (!container) {
      console.warn(`Container not found: ${categoryId}`);
      continue;
    }
    const sections = new Map();
    for (const section of sectionDefinitions) {
      const title = createSectionTitle(section);
      container.appendChild(title);
      sections.set(section.id, title);
    }
    const cardsWithoutSections = [];
    for (const info of cards) {
      if (info.card_section && sections.has(info.card_section)) {
        sections.get(info.card_section).insertAdjacentElement(
          "afterend",
          createCard(info)
        );
      } else {
        cardsWithoutSections.push(info);
      }
    }
    for (const info of cardsWithoutSections) {
      container.appendChild(createCard(info));
    }
  }
};