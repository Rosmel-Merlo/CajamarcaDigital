export interface ICrearProducto {
  nombre: string;
  descripcion: string;
  precioCompra: number;
  precioVenta: number;
  categoriaId: string;
  stockMinimo: number;
  codigo: string;
}
export const InitCrearProductoDTO: ICrearProducto = {
  nombre: "",
  descripcion: "",
  precioCompra: 0,
  precioVenta: 0,
  categoriaId: "",
  stockMinimo: 0,
  codigo: "",
};
