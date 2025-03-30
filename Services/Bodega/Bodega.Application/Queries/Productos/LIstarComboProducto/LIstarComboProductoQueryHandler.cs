using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.Productos.LIstarComboProducto
{
    public class LIstarComboProductoQueryHandler : IRequestHandler<LIstarComboProductoQuery, List<LIstarComboProductoDTO>>
    {
        public readonly IProductoRepository _productoRepository;
        public LIstarComboProductoQueryHandler(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }
        public async Task<List<LIstarComboProductoDTO>> Handle(LIstarComboProductoQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<Producto, bool>> predicate = x => x.Eliminado == null;

                var dataProductos = await _productoRepository.GetAsync(predicate);

                List<LIstarComboProductoDTO> data = (from x in dataProductos
                                                     select new LIstarComboProductoDTO
                                                     {
                                                         Key = x.ProductoId,
                                                         Text = x.Nombre
                                                     }).ToList();
                return data;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}