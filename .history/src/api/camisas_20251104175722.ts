import type { Product } from "./types";

export const camisas: Product[] = [
  {
    id: 1,
    name: "Camisa Oficial",
    price: 89.9,
    image: new URL(
      "../assets/img/shop/camisas/shirt-oficial.png",
      import.meta.url
    ).href,
    category: "camisas",
  },
  {
    id: 2,
    name: "Camisa Alternativa",
    price: 79.9,
    image: "../assets/img/shop/camisas/shirt-alternative.pngs",
    category: "camisas",
  },
];
