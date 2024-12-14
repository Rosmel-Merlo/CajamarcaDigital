namespace Bodega.Application.Queries.Productos.ListarProductos
{
    public class ListarProductosDTO
    {
        public string ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal PrecioCompra { get; set; }
        public decimal PrecioVenta { get; set; }
        public string CategoriaId { get; set; }
        public int StockMinimo { get; set; }
        public string Codigo { get; set; }



    }
}