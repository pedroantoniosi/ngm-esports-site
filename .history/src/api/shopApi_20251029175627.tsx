import hat from "../assets/img/shop/hat.png";
import shirt from "../assets/img/shop/shirt.png";
import bag from "../assets/img/shop/bag.png";
import flag from "../assets/img/shop/flag.png";
import can from "../assets/img/shop/can.png";

interface ShopItem {
  src: string;
  title: string;
}

export const shopApi: ShopItem[] = [
  { src: hat, title: "Bonés" },
  { src: shirt, title: "Camisas" },
  { src: bag, title: "Acessórios" },
  { src: flag, title: "Bandeiras" },
  { src: can, title: "Latas" },
];
