const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");
const randomButton = document.getElementById("randomButton");
const themeButton = document.getElementById("themeButton");

const emojiGrid = document.getElementById("emojiGrid");
const emojiCount = document.getElementById("emojiCount");
const categoryTabs = document.querySelectorAll(
  ".category-tab"
);

const recentList = document.getElementById("recentList");
const clearRecentButton = document.getElementById(
  "clearRecentButton"
);
const toast = document.getElementById("toast");

const emojis = [
  {
    emoji: "😀",
    name: "grinning",
    category: "Smileys"
  },
  {
    emoji: "😃",
    name: "smiley",
    category: "Smileys"
  },
  {
    emoji: "😄",
    name: "smile",
    category: "Smileys"
  },
  {
    emoji: "😁",
    name: "grin",
    category: "Smileys"
  },
  {
    emoji: "😆",
    name: "laughing",
    category: "Smileys"
  },
  {
    emoji: "😅",
    name: "sweat smile",
    category: "Smileys"
  },
  {
    emoji: "🤣",
    name: "rofl",
    category: "Smileys"
  },
  {
    emoji: "😂",
    name: "joy",
    category: "Smileys"
  },
  {
    emoji: "🙂",
    name: "slightly smiling",
    category: "Smileys"
  },
  {
    emoji: "🙃",
    name: "upside down",
    category: "Smileys"
  },
  {
    emoji: "😉",
    name: "wink",
    category: "Smileys"
  },
  {
    emoji: "😊",
    name: "blush",
    category: "Smileys"
  },
  {
    emoji: "😇",
    name: "innocent",
    category: "Smileys"
  },
  {
    emoji: "🥰",
    name: "hearts",
    category: "Smileys"
  },
  {
    emoji: "😍",
    name: "heart eyes",
    category: "Smileys"
  },
  {
    emoji: "🤩",
    name: "star struck",
    category: "Smileys"
  },
  {
    emoji: "😘",
    name: "kiss",
    category: "Smileys"
  },
  {
    emoji: "😎",
    name: "sunglasses",
    category: "Smileys"
  },
  {
    emoji: "🤔",
    name: "thinking",
    category: "Smileys"
  },
  {
    emoji: "😴",
    name: "sleeping",
    category: "Smileys"
  },
  {
    emoji: "😭",
    name: "crying",
    category: "Smileys"
  },
  {
    emoji: "😡",
    name: "angry",
    category: "Smileys"
  },
  {
    emoji: "🥳",
    name: "party",
    category: "Smileys"
  },
  {
    emoji: "🤗",
    name: "hugging",
    category: "Smileys"
  },
  {
    emoji: "🤝",
    name: "handshake",
    category: "People"
  },
  {
    emoji: "👍",
    name: "thumbs up",
    category: "People"
  },
  {
    emoji: "👎",
    name: "thumbs down",
    category: "People"
  },
  {
    emoji: "👏",
    name: "clap",
    category: "People"
  },
  {
    emoji: "🙌",
    name: "raised hands",
    category: "People"
  },
  {
    emoji: "🙏",
    name: "pray",
    category: "People"
  },
  {
    emoji: "💪",
    name: "strong",
    category: "People"
  },
  {
    emoji: "👋",
    name: "wave",
    category: "People"
  },
  {
    emoji: "✌️",
    name: "victory",
    category: "People"
  },
  {
    emoji: "🤞",
    name: "crossed fingers",
    category: "People"
  },
  {
    emoji: "👀",
    name: "eyes",
    category: "People"
  },
  {
    emoji: "🧠",
    name: "brain",
    category: "People"
  },
  {
    emoji: "🐶",
    name: "dog",
    category: "Animals"
  },
  {
    emoji: "🐱",
    name: "cat",
    category: "Animals"
  },
  {
    emoji: "🐭",
    name: "mouse",
    category: "Animals"
  },
  {
    emoji: "🐹",
    name: "hamster",
    category: "Animals"
  },
  {
    emoji: "🐰",
    name: "rabbit",
    category: "Animals"
  },
  {
    emoji: "🦊",
    name: "fox",
    category: "Animals"
  },
  {
    emoji: "🐻",
    name: "bear",
    category: "Animals"
  },
  {
    emoji: "🐼",
    name: "panda",
    category: "Animals"
  },
  {
    emoji: "🐨",
    name: "koala",
    category: "Animals"
  },
  {
    emoji: "🐯",
    name: "tiger",
    category: "Animals"
  },
  {
    emoji: "🦁",
    name: "lion",
    category: "Animals"
  },
  {
    emoji: "🐮",
    name: "cow",
    category: "Animals"
  },
  {
    emoji: "🐸",
    name: "frog",
    category: "Animals"
  },
  {
    emoji: "🐵",
    name: "monkey",
    category: "Animals"
  },
  {
    emoji: "🐔",
    name: "chicken",
    category: "Animals"
  },
  {
    emoji: "🦄",
    name: "unicorn",
    category: "Animals"
  },
  {
    emoji: "🐝",
    name: "bee",
    category: "Animals"
  },
  {
    emoji: "🦋",
    name: "butterfly",
    category: "Animals"
  },
  {
    emoji: "🍎",
    name: "apple",
    category: "Food"
  },
  {
    emoji: "🍌",
    name: "banana",
    category: "Food"
  },
  {
    emoji: "🍇",
    name: "grapes",
    category: "Food"
  },
  {
    emoji: "🍓",
    name: "strawberry",
    category: "Food"
  },
  {
    emoji: "🍕",
    name: "pizza",
    category: "Food"
  },
  {
    emoji: "🍔",
    name: "burger",
    category: "Food"
  },
  {
    emoji: "🍟",
    name: "fries",
    category: "Food"
  },
  {
    emoji: "🌮",
    name: "taco",
    category: "Food"
  },
  {
    emoji: "🍿",
    name: "popcorn",
    category: "Food"
  },
  {
    emoji: "🍩",
    name: "donut",
    category: "Food"
  },
  {
    emoji: "🍰",
    name: "cake",
    category: "Food"
  },
  {
    emoji: "🍪",
    name: "cookie",
    category: "Food"
  },
  {
    emoji: "☕",
    name: "coffee",
    category: "Food"
  },
  {
    emoji: "🚗",
    name: "car",
    category: "Travel"
  },
  {
    emoji: "🚕",
    name: "taxi",
    category: "Travel"
  },
  {
    emoji: "🚌",
    name: "bus",
    category: "Travel"
  },
  {
    emoji: "🚓",
    name: "police car",
    category: "Travel"
  },
  {
    emoji: "🚑",
    name: "ambulance",
    category: "Travel"
  },
  {
    emoji: "🚒",
    name: "fire engine",
    category: "Travel"
  },
  {
    emoji: "✈️",
    name: "airplane",
    category: "Travel"
  },
  {
    emoji: "🚀",
    name: "rocket",
    category: "Travel"
  },
  {
    emoji: "🚲",
    name: "bicycle",
    category: "Travel"
  },
  {
    emoji: "🏠",
    name: "house",
    category: "Travel"
  },
  {
    emoji: "🌍",
    name: "earth",
    category: "Travel"
  },
  {
    emoji: "☀️",
    name: "sun",
    category: "Travel"
  },
  {
    emoji: "🌙",
    name: "moon",
    category: "Travel"
  },
  {
    emoji: "⭐",
    name: "star",
    category: "Travel"
  },
  {
    emoji: "📱",
    name: "phone",
    category: "Objects"
  },
  {
    emoji: "💻",
    name: "laptop",
    category: "Objects"
  },
  {
    emoji: "⌨️",
    name: "keyboard",
    category: "Objects"
  },
  {
    emoji: "📷",
    name: "camera",
    category: "Objects"
  },
  {
    emoji: "🎧",
    name: "headphones",
    category: "Objects"
  },
  {
    emoji: "🎵",
    name: "music",
    category: "Objects"
  },
  {
    emoji: "📚",
    name: "books",
    category: "Objects"
  },
  {
    emoji: "✏️",
    name: "pencil",
    category: "Objects"
  },
  {
    emoji: "🔑",
    name: "key",
    category: "Objects"
  },
  {
    emoji: "🎁",
    name: "gift",
    category: "Objects"
  },
  {
    emoji: "💡",
    name: "idea",
    category: "Objects"
  },
  {
    emoji: "💎",
    name: "gem",
    category: "Objects"
  },
  {
    emoji: "✅",
    name: "check",
    category: "Symbols"
  },
  {
    emoji: "❌",
    name: "cross",
    category: "Symbols"
  },
  {
    emoji: "❓",
    name: "question",
    category: "Symbols"
  },
  {
    emoji: "❗",
    name: "exclamation",
    category: "Symbols"
  },
  {
    emoji: "❤️",
    name: "red heart",
    category: "Symbols"
  },
  {
    emoji: "💔",
    name: "broken heart",
    category: "Symbols"
  },
  {
    emoji: "💯",
    name: "hundred",
    category: "Symbols"
  },
  {
    emoji: "🔥",
    name: "fire",
    category: "Symbols"
  },
  {
    emoji: "✨",
    name: "sparkles",
    category: "Symbols"
  },
  {
    emoji: "⚡",
    name: "electric",
    category: "Symbols"
  },
  {
    emoji: "🎉",
    name: "party popper",
    category: "Symbols"
  },
  {
    emoji: "💬",
    name: "speech bubble",
    category: "Symbols"
  }
];

let selectedCategory = "All";
let recentEmojis = JSON.parse(
  localStorage.getItem("emojiFinderRecent")
) || [];

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getFilteredEmojis() {
  const searchTerm = searchInput.value
    .toLowerCase()
    .trim();

  return emojis.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm) ||
      item.emoji.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function renderEmojis() {
  const filteredEmojis = getFilteredEmojis();

  emojiGrid.innerHTML = "";

  emojiCount.textContent = `${filteredEmojis.length} ${
    filteredEmojis.length === 1 ? "emoji" : "emojis"
  }`;

  if (filteredEmojis.length === 0) {
    emojiGrid.innerHTML = `
      <p class="no-results">
        No emojis found. Try another search.
      </p>
    `;

    return;
  }

  filteredEmojis.forEach((item) => {
    const emojiButton = document.createElement("button");

    emojiButton.className = "emoji-button";
    emojiButton.title = `Copy ${item.name}`;

    emojiButton.innerHTML = `
      <span class="emoji-character">${item.emoji}</span>
      <span class="emoji-name">${item.name}</span>
    `;

    emojiButton.addEventListener("click", () => {
      copyEmoji(item);
    });

    emojiGrid.appendChild(emojiButton);
  });
}

function renderRecentEmojis() {
  recentList.innerHTML = "";

  if (recentEmojis.length === 0) {
    recentList.innerHTML = `
      <p class="empty-message">
        No recently copied emojis yet.
      </p>
    `;

    return;
  }

  recentEmojis.forEach((item) => {
    const recentButton = document.createElement("button");

    recentButton.className = "recent-emoji";
    recentButton.textContent = item.emoji;
    recentButton.title = `Copy ${item.name}`;

    recentButton.addEventListener("click", () => {
      copyEmoji(item);
    });

    recentList.appendChild(recentButton);
  });
}

function copyEmoji(item) {
  navigator.clipboard
    .writeText(item.emoji)
    .then(() => {
      recentEmojis = [
        item,
        ...recentEmojis.filter(
          (recentItem) => recentItem.emoji !== item.emoji
        )
      ].slice(0, 12);

      localStorage.setItem(
        "emojiFinderRecent",
        JSON.stringify(recentEmojis)
      );

      renderRecentEmojis();
      showToast(`${item.emoji} copied to clipboard`);
    })
    .catch(() => {
      showToast("Copy failed. Please try again.");
    });
}

function chooseRandomEmoji() {
  const availableEmojis = getFilteredEmojis();

  if (availableEmojis.length === 0) {
    showToast("No emojis available for this search");
    return;
  }

  const randomIndex = Math.floor(
    Math.random() * availableEmojis.length
  );

  const randomEmoji = availableEmojis[randomIndex];

  copyEmoji(randomEmoji);
}

function clearSearch() {
  searchInput.value = "";
  renderEmojis();
  searchInput.focus();
}

function clearRecent() {
  recentEmojis = [];

  localStorage.removeItem("emojiFinderRecent");

  renderRecentEmojis();
  showToast("Recent emojis cleared");
}

function loadTheme() {
  const savedTheme = localStorage.getItem(
    "emojiFinderTheme"
  );

  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️";
  }
}

searchInput.addEventListener("input", renderEmojis);

clearButton.addEventListener("click", clearSearch);

randomButton.addEventListener(
  "click",
  chooseRandomEmoji
);

clearRecentButton.addEventListener(
  "click",
  clearRecent
);

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedCategory = tab.dataset.category;

    categoryTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });

    renderEmojis();
  });
});

themeButton.addEventListener("click", () => {
  const isDark =
    document.body.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.body.removeAttribute("data-theme");
    themeButton.textContent = "🌙";
    localStorage.setItem("emojiFinderTheme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeButton.textContent = "☀️";
    localStorage.setItem("emojiFinderTheme", "dark");
  }
});

loadTheme();
renderEmojis();
renderRecentEmojis();