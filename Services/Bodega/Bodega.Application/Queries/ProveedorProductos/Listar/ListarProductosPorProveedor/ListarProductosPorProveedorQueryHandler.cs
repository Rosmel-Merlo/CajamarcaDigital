using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.ProveedorProductos.Listar.ListarProductosPorProveedor
{
    public class ListarProductosPorProveedorQueryHandler : IRequestHandler<ListarProductosPorProveedorQuery, List<ListarProductosPorProveedorDTO>>
    {
        private readonly IProveedorProductoRepository _proveedorProductoRepository;

        public ListarProductosPorProveedorQueryHandler(IProveedorProductoRepository proveedorProductoRepository)
        {
            _proveedorProductoRepository = proveedorProductoRepository;
        }

        public async Task<List<ListarProductosPorProveedorDTO>> Handle(ListarProductosPorProveedorQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<ProveedorProducto, bool>> fAll = x => x.Eliminado == null && x.ProveedorId.Equals(request.ProveedorId);
                List<Expression<Func<ProveedorProducto, object>>> include = new List<Expression<Func<ProveedorProducto, object>>>();
                include.Add(x => x.Producto);
                var productos = await _proveedorProductoRepository.GetAsync(fAll, null, include);
                var response = (from x in productos
                                select new ListarProductosPorProveedorDTO
                                {
                                    ProductoId = x.Producto.ProductoId,
                                    Codigo = x.Producto.Codigo,
                                    Descripcion = x.Producto.Descripcion,
                                    CategoriaId = x.Producto.CategoriaId,
                                    Nombre = x.Producto.Nombre,
                                    PrecioCompra = x.Producto.PrecioCompra,
                                    PrecioVenta = x.Producto.PrecioVenta,
                                    StockMinimo = x.Producto.StockMinimo
                                }).ToList();

                return response;
            }
            catch (System.Exception ex)
            {
                // TODO
                throw new NotImplementedException();
            }
        }
    }
}