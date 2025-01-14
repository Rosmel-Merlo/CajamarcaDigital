
namespace Bodega.Application.Queries.ProveedorProductos.Listar.ListarProveedoresPorProducto
{
    public class ListarProveedoresPorProductoDTO
    {
        public Guid ProveedorId { get; set; }
        public string Ruc { get; set; }
        public string NombreContactor { get; set; }
        public string TelefonoContacto { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
    }
}