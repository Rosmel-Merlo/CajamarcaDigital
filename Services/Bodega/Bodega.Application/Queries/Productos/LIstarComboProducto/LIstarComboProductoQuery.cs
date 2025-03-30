using MediatR;

namespace Bodega.Application.Queries.Productos.LIstarComboProducto
{
    public class LIstarComboProductoQuery : IRequest<List<LIstarComboProductoDTO>>
    {
        public LIstarComboProductoQuery()
        {
        }
    }
}