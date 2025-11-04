const items = [
  { name: "hat", title: "Bonés" },
  { name: "shirt", title: "Camisas" },
  { name: "bag", title: "Acessórios" },
  { name: "flag", title: "Bandeiras" },
  { name: "can", title: "Latas" },
];

export const shopApi = items.map((item) => ({
  src: new URL(`../assets/img/shop/${item.name}.png`, import.meta.url).href,
  title: item.title,
}));
