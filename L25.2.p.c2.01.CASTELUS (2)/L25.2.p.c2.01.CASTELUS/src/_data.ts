// _data.ts
interface iPlatoBase {
  codigo: string;
  origen: number;
  costo: number;
}

// 1=Almuerzo
export interface iAlmuerzoData extends iPlatoBase {
  llevaSopa: string; // 'SI' o 'NO'
}

// 2=Cena
export interface iCenaData extends iPlatoBase {
  especialidad: number; // 1=vegetariano, 2=mar, 3=tierra
}

export let platosAlmuerzo: iAlmuerzoData[];
export let platosCena: iCenaData[];

// Datos de ejemplo: Tabla de almuerzo
platosAlmuerzo = [
  { codigo: "11", origen: 1, costo: 10.0, llevaSopa: "NO" },
  { codigo: "77", origen: 1, costo: 20.0, llevaSopa: "SI" },
  { codigo: "55", origen: 1, costo: 30.0, llevaSopa: "NO" },
  { codigo: "66", origen: 2, costo: 50.0, llevaSopa: "SI" },
];

// Datos de ejemplo: Tabla de cena
platosCena = [
  { codigo: "22", origen: 1, costo: 60.0, especialidad: 3 },
  { codigo: "44", origen: 2, costo: 30.0, especialidad: 2 },
  { codigo: "33", origen: 1, costo: 40.0, especialidad: 2 },
  { codigo: "88", origen: 2, costo: 50.0, especialidad: 1 },
];
