import hat from "../assets/img/shop/hats/hat.png";
import shirt from "../assets/img/shop/shirts/shirt.png";
import bag from "../assets/img/shop/bags/bag.png";
import flag from "../assets/img/shop/flags/flag.png";
import can from "../assets/img/shop/cans/can.png";

export interface ShopItem {
  src: string;
  title: string;
}

export interface ShopCategory {
  name: string;
  items: ShopItem[];
}

export const shopApi: ShopCategory[] = [
  {
    name: "Roupas",
    items: [
      { src: hat, title: "Bonés" },
      { src: shirt, title: "Camisas" },
    ],
  },
  {
    name: "Acessórios",
    items: [{ src: bag, title: "Bolsas" }],
  },
  {
    name: "Colecionáveis",
    items: [
      { src: flag, title: "Bandeiras" },
      { src: can, title: "Latas" },
    ],
  },
];
