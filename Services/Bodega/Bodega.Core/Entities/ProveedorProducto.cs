
namespace Bodega.Core.Entities
{
    public class ProveedorProducto
    {
        public ProveedorProducto() { }

        public Guid ProveedorId { get; set; }
        public Proveedor? Proveedor { get; set; }
        public Guid ProductoId { get; set; }
        public Producto? Producto { get; set; }

        public decimal Precio { get; set; }
        public DateTime FechaSuministro { get; set; }
    }
}