// menu.js

const menuData = {
  ko: [
    {
      id: "coffee",
      title: "커피",
      doodle: `<svg viewBox="0 0 24 24"><path d="M7 8h10v6a4 4 0 1 1-10 0V8z"/><path d="M17 8h2a3 3 0 0 1 0 6h-2"/></svg>`,
      items: [
        { name: "아메리카노", price: "₩4,000", ingredients: "에스프레소, 물" },
        { name: "카페라떼", price: "₩4,500", ingredients: "에스프레소, 우유" },
        { name: "카푸치노", price: "₩4,700", ingredients: "에스프레소, 스팀밀크, 거품" },
      ],
    },
    {
      id: "tea",
      title: "차",
      doodle: `<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="M8 6v-2h8v2"/></svg>`,
      items: [
        { name: "녹차", price: "₩3,500", ingredients: "녹차잎, 뜨거운물" },
        { name: "허브티", price: "₩4,000", ingredients: "허브믹스, 뜨거운물" },
        { name: "레몬티", price: "₩4,200", ingredients: "홍차, 레몬" },
      ],
    },
    {
      id: "bubble_tea",
      title: "버블티",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="17" r="2"/><path d="M6 7h12v10H6z"/></svg>`,
      items: [
        { name: "타로버블티", price: "₩5,000", ingredients: "타로, 우유, 타피오카" },
        { name: "밀크티", price: "₩4,800", ingredients: "홍차, 우유, 타피오카" },
        { name: "흑설탕버블티", price: "₩5,200", ingredients: "흑설탕, 우유, 타피오카" },
      ],
    },
    {
      id: "bread",
      title: "빵",
      doodle: `<svg viewBox="0 0 24 24"><path d="M5 8h14v8H5z"/><path d="M7 8v-2h10v2"/></svg>`,
      items: [
        { name: "크로와상", price: "₩3,000", ingredients: "밀가루, 버터, 설탕" },
        { name: "식빵", price: "₩2,500", ingredients: "밀가루, 물, 효모" },
        { name: "베이글", price: "₩3,200", ingredients: "밀가루, 물, 효모, 소금" },
      ],
    },
    {
      id: "specials",
      title: "스페셜",
      doodle: `<svg viewBox="0 0 24 24"><path d="M12 2l2 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z"/></svg>`,
      items: [
        { name: "달고나커피", price: "₩5,500", ingredients: "커피, 설탕, 우유" },
        { name: "흑임자라떼", price: "₩5,000", ingredients: "흑임자, 우유, 설탕" },
      ],
    },
    {
      id: "smoothies",
      title: "스무디",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M6 6l12 12"/></svg>`,
      items: [
        { name: "딸기스무디", price: "₩5,000", ingredients: "딸기, 우유, 얼음" },
        { name: "망고스무디", price: "₩5,200", ingredients: "망고, 우유, 얼음" },
        { name: "바나나스무디", price: "₩5,000", ingredients: "바나나, 우유, 얼음" },
      ],
    },
    {
      id: "matcha",
      title: "말차",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M8 16h8"/></svg>`,
      items: [
        { name: "말차라떼", price: "₩5,200", ingredients: "말차, 우유, 설탕" },
        { name: "아이스 말차", price: "₩5,200", ingredients: "말차, 우유, 얼음" },
        { name: "말차프라푸치노", price: "₩5,800", ingredients: "말차, 우유, 얼음, 크림" },
      ],
    },
    {
      id: "desserts",
      title: "디저트",
      doodle: `<svg viewBox="0 0 24 24"><path d="M4 12h16v8H4z"/><path d="M8 12V8h8v4"/></svg>`,
      items: [
        { name: "브라우니", price: "₩3,500", ingredients: "초콜릿, 밀가루, 설탕" },
        { name: "마카롱", price: "₩2,800", ingredients: "아몬드가루, 설탕, 크림" },
        { name: "치즈케이크", price: "₩4,500", ingredients: "크림치즈, 설탕, 쿠키크러스트" },
      ],
    },
    {
      id: "ade",
      title: "에이드",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M12 6v12"/></svg>`,
      items: [
        { name: "자몽에이드", price: "₩4,800", ingredients: "자몽, 탄산수, 시럽" },
        { name: "레몬에이드", price: "₩4,500", ingredients: "레몬, 탄산수, 시럽" },
        { name: "청포도에이드", price: "₩4,800", ingredients: "청포도, 탄산수, 시럽" },
      ],
    }
  ],

  en: [
    {
      id: "coffee",
      title: "Coffee",
      doodle: `<svg viewBox="0 0 24 24"><path d="M7 8h10v6a4 4 0 1 1-10 0V8z"/><path d="M17 8h2a3 3 0 0 1 0 6h-2"/></svg>`,
      items: [
        { name: "Americano", price: "₩4,000", ingredients: "Espresso, water" },
        { name: "Cafe Latte", price: "₩4,500", ingredients: "Espresso, milk" },
        { name: "Cappuccino", price: "₩4,700", ingredients: "Espresso, steamed milk, foam" },
      ],
    },
    {
      id: "tea",
      title: "Tea",
      doodle: `<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="M8 6v-2h8v2"/></svg>`,
      items: [
        { name: "Green Tea", price: "₩3,500", ingredients: "Green tea leaves, hot water" },
        { name: "Herbal Tea", price: "₩4,000", ingredients: "Herbal mix, hot water" },
        { name: "Lemon Tea", price: "₩4,200", ingredients: "Black tea, lemon" },
      ],
    },
    {
      id: "bubble_tea",
      title: "Bubble Tea",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="17" r="2"/><path d="M6 7h12v10H6z"/></svg>`,
      items: [
        { name: "Taro Bubble Tea", price: "₩5,000", ingredients: "Taro, milk, tapioca" },
        { name: "Milk Tea", price: "₩4,800", ingredients: "Black tea, milk, tapioca" },
        { name: "Brown Sugar Bubble Tea", price: "₩5,200", ingredients: "Brown sugar, milk, tapioca" },
      ],
    },
    {
      id: "bread",
      title: "Bread",
      doodle: `<svg viewBox="0 0 24 24"><path d="M5 8h14v8H5z"/><path d="M7 8v-2h10v2"/></svg>`,
      items: [
        { name: "Croissant", price: "₩3,000", ingredients: "Flour, butter, sugar" },
        { name: "Loaf Bread", price: "₩2,500", ingredients: "Flour, water, yeast" },
        { name: "Bagel", price: "₩3,200", ingredients: "Flour, water, yeast, salt" },
      ],
    },
    {
      id: "specials",
      title: "Specials",
      doodle: `<svg viewBox="0 0 24 24"><path d="M12 2l2 7h7l-6 5 2 7-6-5-6 5 2-7-6-5h7z"/></svg>`,
      items: [
        { name: "Dalgona Coffee", price: "₩5,500", ingredients: "Coffee, sugar, milk" },
        { name: "Black Sesame Latte", price: "₩5,000", ingredients: "Black sesame, milk, sugar" },
      ],
    },
    {
      id: "smoothies",
      title: "Smoothies",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M6 6l12 12"/></svg>`,
      items: [
        { name: "Strawberry Smoothie", price: "₩5,000", ingredients: "Strawberry, milk, ice" },
        { name: "Mango Smoothie", price: "₩5,200", ingredients: "Mango, milk, ice" },
        { name: "Banana Smoothie", price: "₩5,000", ingredients: "Banana, milk, ice" },
      ],
    },
    {
      id: "matcha",
      title: "Matcha",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M8 16h8"/></svg>`,
      items: [
        { name: "Matcha Latte", price: "₩5,200", ingredients: "Matcha, milk, sugar" },
        { name: "Iced Matcha", price: "₩5,200", ingredients: "Matcha, milk, ice" },
        { name: "Matcha Frappuccino", price: "₩5,800", ingredients: "Matcha, milk, ice, cream" },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      doodle: `<svg viewBox="0 0 24 24"><path d="M4 12h16v8H4z"/><path d="M8 12V8h8v4"/></svg>`,
      items: [
        { name: "Brownie", price: "₩3,500", ingredients: "Chocolate, flour, sugar" },
        { name: "Macaron", price: "₩2,800", ingredients: "Almond flour, sugar, cream" },
        { name: "Cheesecake", price: "₩4,500", ingredients: "Cream cheese, sugar, cookie crust" },
      ],
    },
    {
      id: "ade",
      title: "Ade",
      doodle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M12 6v12"/></svg>`,
      items: [
        { name: "Grapefruit Ade", price: "₩4,800", ingredients: "Grapefruit, sparkling water, syrup" },
        { name: "Lemon Ade", price: "₩4,500", ingredients: "Lemon, sparkling water, syrup" },
        { name: "Green Grape Ade", price: "₩4,800", ingredients: "Green grape, sparkling water, syrup" },
      ],
    }
  ],
};

function renderMenu(language = "ko") {
  const container1 = document.getElementById("column-1");
  const container2 = document.getElementById("column-2");

  container1.innerHTML = "";
  container2.innerHTML = "";

  const data = menuData[language];
  const half = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, half);
  const secondHalf = data.slice(half);

  function buildSection(section) {
    const sectionEl = document.createElement("section");
    sectionEl.className = "section";

    sectionEl.innerHTML = `
      <h2>${section.doodle} ${section.title}</h2>
      ${section.items
        .map(
          (item) => `
        <div class="menu-item">
          <h3>${item.name} <span class="price">${item.price}</span></h3>
          <div class="ingredients">${item.ingredients}</div>
        </div>
      `
        )
        .join("")}
    `;

    return sectionEl;
  }

  firstHalf.forEach((section) => {
    container1.appendChild(buildSection(section));
  });

  secondHalf.forEach((section) => {
    container2.appendChild(buildSection(section));
  });
}

// Initial render
renderMenu("ko");
