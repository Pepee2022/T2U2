import { curso } from "./curso";

export interface TipoCurso {
    id: string,
    nombre: string,
    cursos: curso[]
}