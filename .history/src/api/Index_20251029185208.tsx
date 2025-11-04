import { camisas } from "./camisas";
import { bones } from "./bones";
import { acessorios } from "./acessorios";
import type { ShopCategory } from "./types";

export const shopApi: ShopCategory[] = [
  { name: "Camisas", items: camisas },
  { name: "Bonés", items: bones },
  { name: "Acessórios", items: acessorios },
];
