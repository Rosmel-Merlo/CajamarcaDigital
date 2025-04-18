export interface IActualizarInventario {
  productoId: string| undefined;
  seccionId: string | undefined;
  cantidad: number | undefined;
}

export const InitializaInventario: IActualizarInventario = {
  productoId: undefined,
  seccionId: undefined,
  cantidad: undefined,
}