using MediatR;

namespace Bodega.Application.Queries.ProveedorProductos.Listar.ListarProveedoresPorProducto
{
    public class ListarProveedoresPorProductoQuery : IRequest<List<ListarProveedoresPorProductoDTO>>
    {
        public ListarProveedoresPorProductoQuery() { }
        public Guid ProductoId { get; set; }
    }
}