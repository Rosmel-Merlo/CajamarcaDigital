export interface IListarProducto {
  productoId: string;
  nombre: string;
  descripcion: string;
  precioCompra: number;
  precioVenta: number;
  categoriaId: string;
  stockMinimo: number;
  codigo: string;
}
