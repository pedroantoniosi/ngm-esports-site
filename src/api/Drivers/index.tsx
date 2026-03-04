import type { Driver } from "@/types/driver";

/**
 * Dados crus (mock interno).
 * Este formato NÃO deve vazar para a UI.
 */
const rawDrivers = [
  { id: 1, name: "Peter Fir", state: "Brazil", team: "NGM eSports", pts: 0 },
  { id: 2, name: "Lucas Murno", state: "Brazil", team: "TBT", pts: 0 },
  {
    id: 3,
    name: "Arianderso Melo",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  {
    id: 4,
    name: "Juscelino Honorato",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  { id: 5, name: "Felipe Ferreira", state: "Brazil", team: "TBT", pts: 0 },
  {
    id: 6,
    name: "Jonathan Holohan",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  { id: 7, name: "Felipe Muniz", state: "Brazil", team: "TBT", pts: 0 },
  {
    id: 8,
    name: "Roberto Gelinski Jr",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  { id: 9, name: "Lázaro Rocha", state: "Brazil", team: "TBT", pts: 0 },
  { id: 10, name: "Antônio Isaias", state: "Brazil", team: "TBT", pts: 0 },
  { id: 11, name: "Nathan Marchon", state: "Brazil", team: "TBT", pts: 0 },
  { id: 12, name: "Romero Jr.", state: "Brazil", team: "TBT", pts: 0 },
  {
    id: 13,
    name: "Eduardo Silvestre",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  {
    id: 14,
    name: "Giovane Barbosa",
    state: "Brazil",
    team: "NGM eSports",
    pts: 0,
  },
  {
    id: 15,
    name: "Willian Rodrigues",
    state: "Brazil",
    team: "TBT",
    pts: 0,
  },
  { id: 16, name: "Gabriel Almeida", state: "Brazil", team: "TBT", pts: 0 },
  { id: 17, name: "Miguel Quirino", state: "Brazil", team: "TBT", pts: 0 },
  { id: 18, name: "Daniel Amorim", state: "Brazil", team: "TBT", pts: 0 },
  { id: 19, name: "Eduardo Amorim", state: "Brazil", team: "TBT", pts: 0 },
  { id: 20, name: "Gabriel Krefta", state: "Brazil", team: "TBT", pts: 0 },
  { id: 21, name: "Gabriel Pecly", state: "Brazil", team: "TBT", pts: 0 },
  { id: 22, name: "Caio Viana", state: "Brazil", team: "NGM eSports", pts: 0 },
  {
    id: 23,
    name: "Gustavo Brudszenski",
    state: "Brazil",
    team: "TEAM 8",
    pts: 0,
  },
  { id: 24, name: "Rafael Danin", state: "Brazil", team: "TBT", pts: 0 },
];

/**
 * API pública tipada.
 * O resto do app só enxerga o Domain Model `Driver`.
 */
export function getDrivers(): Driver[] {
  return rawDrivers.map((driver) => ({
    id: driver.id,
    name: driver.name,
    state: driver.state,
    team: driver.team,
    pts: driver.pts,
  }));
}
