import { TechnologyType, TypeVieo } from "./TypeVideo";

export type Category = {
   type: TechnologyType; // Tipo da categoria (e.g., "FRONT END", "BACK END", "MOBILE")
   data: TypeVieo[]; // Lista de itens da categoria
 };

export type DataBase = Category[]