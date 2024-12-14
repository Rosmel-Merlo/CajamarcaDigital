using Bodega.Application.Repositories;
using MediatR;

namespace Bodega.Application.Queries.Productos.ListarProductos
{
    public class ListarProductosQueryHandler : IRequestHandler<ListarProductosQuery, List<ListarProductosDTO>>
    {
        private readonly IProductoRepository _productoRepository;
        public ListarProductosQueryHandler(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }

        public async Task<List<ListarProductosDTO>> Handle(ListarProductosQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var data = await _productoRepository.GetAllAsync();

                List<ListarProductosDTO> dataProductos = (from x in data
                                                          select new ListarProductosDTO()
                                                          {
                                                              ProductoId = x.ProductoId.ToString(),
                                                              Nombre = x.Nombre,
                                                              Descripcion = x.Descripcion,
                                                              PrecioCompra = x.PrecioCompra,
                                                              PrecioVenta = x.PrecioVenta,
                                                              CategoriaId = x.CategoriaId.ToString(),
                                                              StockMinimo = x.StockMinimo,
                                                              Codigo = x.Codigo,
                                                          }).ToList();

                return dataProductos;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}