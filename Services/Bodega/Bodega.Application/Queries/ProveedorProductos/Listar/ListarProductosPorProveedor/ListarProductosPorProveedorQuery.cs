using MediatR;

namespace Bodega.Application.Queries.ProveedorProductos.Listar.ListarProductosPorProveedor
{
    public class ListarProductosPorProveedorQuery : IRequest<List<ListarProductosPorProveedorDTO>>
    {
        public Guid ProveedorId { get; set; }
    }
}