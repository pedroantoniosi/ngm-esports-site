export type ProductCategory = "bones" | "camisas" | "acessorios";

export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: ProductCategory;
};

const products: Product[] = [
  // =======================
  // CAMISAS
  // =======================
  {
    id: 1,
    name: "Camisa Oficial",
    price: 89.9,
    img: new URL(
      "/src/assets/img/shop/camisas/shirt-oficial.png",
      import.meta.url
    ).href,
    category: "camisas",
  },
  {
    id: 2,
    name: "Camisa Alternativa",
    price: 79.9,
    img: new URL(
      "/src/assets/img/shop/camisas/shirt-alternative.png",
      import.meta.url
    ).href,
    category: "camisas",
  },

  // =======================
  // BONÉS
  // =======================
  {
    id: 3,
    name: "Boné Oficial",
    price: 89.9,
    img: new URL("/src/assets/img/shop/bones/hat-oficial.png", import.meta.url)
      .href,
    category: "bones",
  },
  {
    id: 4,
    name: "Boné Alternativo",
    price: 79.9,
    img: new URL(
      "/src/assets/img/shop/bones/hat-alternative.png",
      import.meta.url
    ).href,
    category: "bones",
  },

  // =======================
  // ACESSÓRIOS
  // =======================
  {
    id: 5,
    name: "Mochila Oficial",
    price: 89.9,
    img: new URL(
      "/src/assets/img/shop/acessorios/bag-oficial.png",
      import.meta.url
    ).href,
    category: "acessorios",
  },
  {
    id: 6,
    name: "Mochila Alternativa",
    price: 79.9,
    img: new URL(
      "/src/assets/img/shop/acessorios/bag-alternative.png",
      import.meta.url
    ).href,
    category: "acessorios",
  },
  {
    id: 7,
    name: "Bandeira Oficial",
    price: 79.9,
    img: new URL(
      "/src/assets/img/shop/acessorios/flag-oficial.png",
      import.meta.url
    ).href,
    category: "acessorios",
  },
  {
    id: 8,
    name: "Bandeira Alternativa",
    price: 79.9,
    img: new URL(
      "/src/assets/img/shop/acessorios/flag-alternative.png",
      import.meta.url
    ).href,
    category: "acessorios",
  },
];

export default products;
