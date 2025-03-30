
using Common.Core.Base;

namespace Bodega.Core.Entities
{
    public class Inventario : EntityBase
    {
        public Inventario() { }

        public Guid ProductoId { get; set; }
        public Producto Producto { get; set; }
        public Guid SeccionId { get; set; }
        public Seccion Seccion { get; set; }
        public int Cantidad { get; set; }
    }
}