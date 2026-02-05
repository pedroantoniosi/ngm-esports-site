export type ProductCategory = "bones" | "camisas" | "acessorios";

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: ProductCategory;
  kitType: "oficial" | "alternative";
};

const products: Product[] = [
  // =======================
  // CAMISAS
  // =======================
  {
    id: 1,
    name: "Camisa Oficial",
    price: 89.99,
    img: new URL(
      "/src/assets/img/shop/camisas/shirt-oficial.png",
      import.meta.url,
    ).href,
    category: "camisas",
    kitType: "oficial",
  },
  {
    id: 2,
    name: "Camisa Alternativa",
    price: 79.99,
    img: new URL(
      "/src/assets/img/shop/camisas/shirt-alternative.png",
      import.meta.url,
    ).href,
    category: "camisas",
    kitType: "alternative",
  },

  // =======================
  // BONÉS
  // =======================
  {
    id: 3,
    name: "Boné Oficial",
    price: 89.99,
    img: new URL("/src/assets/img/shop/bones/hat-oficial.png", import.meta.url)
      .href,
    category: "bones",
    kitType: "oficial",
  },
  {
    id: 4,
    name: "Boné Alternativo",
    price: 79.99,
    img: new URL(
      "/src/assets/img/shop/bones/hat-alternative.png",
      import.meta.url,
    ).href,
    category: "bones",
    kitType: "alternative",
  },

  // =======================
  // ACESSÓRIOS
  // =======================
  {
    id: 5,
    name: "Mochila Oficial",
    price: 89.99,
    img: new URL(
      "/src/assets/img/shop/acessorios/bag-oficial.png",
      import.meta.url,
    ).href,
    category: "acessorios",
    kitType: "oficial",
  },
  {
    id: 6,
    name: "Mochila Alternativa",
    price: 79.99,
    img: new URL(
      "/src/assets/img/shop/acessorios/bag-alternative.png",
      import.meta.url,
    ).href,
    category: "acessorios",
    kitType: "alternative",
  },
  {
    id: 7,
    name: "Bandeira Oficial",
    price: 79.99,
    img: new URL(
      "/src/assets/img/shop/acessorios/flag-oficial.png",
      import.meta.url,
    ).href,
    category: "acessorios",
    kitType: "oficial",
  },
  {
    id: 8,
    name: "Bandeira Alternativa",
    price: 79.99,
    img: new URL(
      "/src/assets/img/shop/acessorios/flag-alternative.png",
      import.meta.url,
    ).href,
    category: "acessorios",
    kitType: "alternative",
  },
];

export default products;
