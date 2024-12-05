using Common.Core.Base;

namespace Bodega.Core.Entities
{
    public class Proveedor : EntityBase
    {
        public Proveedor() { }
        public Guid ProveedorId { get; set; }
        public string Ruc { get; set; }
        public string NombreContacto { get; set; }
        public string TelefonoContacto { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }

        public ICollection<ProveedorProducto> ProveedorProductos { get; set; } = new List<ProveedorProducto>();

    }
}