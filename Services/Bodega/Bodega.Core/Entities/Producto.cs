
using Common.Core.Base;

namespace Bodega.Core.Entities
{
    public class Producto : EntityBase
    {
        public Producto(string nombre, string descripcion, string codigo)
        {
            Nombre = nombre;
            Descripcion = descripcion;
            Codigo = codigo;
        }
        public Guid ProductoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal PrecioCompra { get; set; }
        public decimal PrecioVenta { get; set; }
        public Guid CategoriaId { get; set; }
        public Categoria? Categoria { get; set; }
        public int StockMinimo { get; set; }
        public string Codigo { get; set; }

        public ICollection<Inventario> Inventarios { get; set; } = new List<Inventario>();
        public ICollection<ProveedorProducto> ProveedorProductos { get; set; } = new List<ProveedorProducto>();

    }
}