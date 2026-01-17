import type { Driver } from "@/types/driver";

/**
 * Dados crus (mock interno).
 * Este formato NÃO deve vazar para a UI.
 */
const rawDrivers = [
  { id: 1, nome: "Pedro Fir", state: "Brazil", team: "TEAM 1", pts: 0 },
  { id: 2, nome: "Lucas Murno", state: "Brazil", team: "TEAM 1", pts: 0 },
  { id: 3, nome: "Arianderso Melo", state: "Brazil", team: "TEAM 1", pts: 0 },
  {
    id: 4,
    nome: "Juscelino Honorato",
    state: "Brazil",
    team: "TEAM 2",
    pts: 0,
  },
  { id: 5, nome: "Felipe Ferreira", state: "Brazil", team: "TEAM 2", pts: 0 },
  {
    id: 6,
    nome: "Jonathan Holohan",
    state: "Brazil",
    team: "TEAM 2",
    pts: 0,
  },
  { id: 7, nome: "Felipe Muniz", state: "Brazil", team: "TEAM 3", pts: 0 },
  {
    id: 8,
    nome: "Roberto Gelinski Jr",
    state: "Brazil",
    team: "TEAM 3",
    pts: 0,
  },
  { id: 9, nome: "Lázaro Rocha", state: "Brazil", team: "TEAM 3", pts: 0 },
  { id: 10, nome: "Antônio Isaias", state: "Brazil", team: "TEAM 4", pts: 0 },
  { id: 11, nome: "Nathan Marchon", state: "Brazil", team: "TEAM 4", pts: 0 },
  { id: 12, nome: "Romero Jr.", state: "Brazil", team: "TEAM 4", pts: 0 },
  {
    id: 13,
    nome: "Eduardo Silvestre",
    state: "Brazil",
    team: "TEAM 5",
    pts: 0,
  },
  { id: 14, nome: "Giovane Barbosa", state: "Brazil", team: "TEAM 5", pts: 0 },
  {
    id: 15,
    nome: "Willian Rodrigues",
    state: "Brazil",
    team: "TEAM 5",
    pts: 0,
  },
  { id: 16, nome: "Gabriel Almeida", state: "Brazil", team: "TEAM 6", pts: 0 },
  { id: 17, nome: "Miguel Quirino", state: "Brazil", team: "TEAM 6", pts: 0 },
  { id: 18, nome: "Daniel Amorim", state: "Brazil", team: "TEAM 6", pts: 0 },
  { id: 19, nome: "Eduardo Amorim", state: "Brazil", team: "TEAM 7", pts: 0 },
  { id: 20, nome: "Gabriel Krefta", state: "Brazil", team: "TEAM 7", pts: 0 },
  { id: 21, nome: "Gabriel Pecly", state: "Brazil", team: "TEAM 7", pts: 0 },
  { id: 22, nome: "Arnaldo Vicente", state: "Brazil", team: "TEAM 8", pts: 0 },
  {
    id: 23,
    nome: "Gustavo Brudszenski",
    state: "Brazil",
    team: "TEAM 8",
    pts: 0,
  },
  { id: 24, nome: "Rafael Danin", state: "Brazil", team: "TEAM 8", pts: 0 },
];

/**
 * API pública tipada.
 * O resto do app só enxerga o Domain Model `Driver`.
 */
export function getDrivers(): Driver[] {
  return rawDrivers.map((driver) => ({
    id: driver.id,
    name: driver.nome,
    state: driver.state,
    team: driver.team,
    points: driver.pts,
  }));
}
