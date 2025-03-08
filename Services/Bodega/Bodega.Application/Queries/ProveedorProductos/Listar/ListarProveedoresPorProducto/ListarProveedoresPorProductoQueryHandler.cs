
using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.ProveedorProductos.Listar.ListarProveedoresPorProducto
{
    public class ListarProveedoresPorProductoQueryHandler : IRequestHandler<ListarProveedoresPorProductoQuery, List<ListarProveedoresPorProductoDTO>>
    {
        private readonly IProveedorProductoRepository _proveedorProductoRepository;

        public ListarProveedoresPorProductoQueryHandler(IProveedorProductoRepository proveedorProductoRepository)
        {
            _proveedorProductoRepository = proveedorProductoRepository;
        }

        public async Task<List<ListarProveedoresPorProductoDTO>> Handle(ListarProveedoresPorProductoQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<ProveedorProducto, bool>> fAll = x => x.Eliminado == null && x.ProductoId.Equals(request.ProductoId);

                List<Expression<Func<ProveedorProducto, object>>> include = new List<Expression<Func<ProveedorProducto, object>>>();
                include.Add(x => x.Proveedor);

                var proveedores = await _proveedorProductoRepository.GetAsync(fAll, null, include);

                var response = (from x in proveedores
                                select new ListarProveedoresPorProductoDTO
                                {
                                    ProveedorId = x.ProveedorId,
                                    Direccion = x.Proveedor.Direccion,
                                    Email = x.Proveedor.Email,
                                    NombreContacto = x.Proveedor.NombreContacto,
                                    Ruc = x.Proveedor.Ruc,
                                    Telefono = x.Proveedor.Telefono,
                                    TelefonoContacto = x.Proveedor.TelefonoContacto
                                }).ToList();

                return response;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}