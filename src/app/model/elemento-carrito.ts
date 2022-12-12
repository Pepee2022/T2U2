import { Paqueterias } from './paqueterias';

export interface ElementoCarrito {
    id: string,
    curso: Paqueterias,
    cantidad: number,
    subtotal: number
}

