const items = [
  { name: "hat", title: "Hats" },
  { name: "shirt", title: "Shirts" },
  { name: "bag", title: "Acessories" },
  { name: "flag", title: "Flags" },
  { name: "can", title: "Cans" },
];

export const shopApi = items.map((item) => ({
  src: new URL(`../assets/img/shop/${item.name}.png`, import.meta.url).href,
  title: item.title,
}));
