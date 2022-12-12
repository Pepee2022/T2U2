import { Paqueterias } from "./paqueterias";

export interface TipoPaquete {
    id: string,
    nombre: string,
    cursos: Paqueterias[]
}
