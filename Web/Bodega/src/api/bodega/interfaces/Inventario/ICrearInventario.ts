export interface ICrearInventario {
  productoId: string | undefined;
  seccionId: string | undefined;
  cantidad: number;
}

export const InitCrearInventario: ICrearInventario = {
  seccionId: undefined,
  productoId: undefined,
  cantidad: 0,
};
