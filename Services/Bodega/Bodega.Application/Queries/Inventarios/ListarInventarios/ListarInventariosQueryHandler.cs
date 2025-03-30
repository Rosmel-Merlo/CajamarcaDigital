using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.Inventarios.ListarInventarios
{
    public class ListarInventariosQueryHandler : IRequestHandler<ListarInventariosQuery, List<ListarInventariosDTO>>
    {
        private readonly IInventarioRepository _inventarioRepository;

        public ListarInventariosQueryHandler(IInventarioRepository inventarioRepository)
        {
            _inventarioRepository = inventarioRepository;
        }


        public async Task<List<ListarInventariosDTO>> Handle(ListarInventariosQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<Inventario, bool>> filter = x => x.Eliminado == null;
                List<Expression<Func<Inventario, object>>> includes = new List<Expression<Func<Inventario, object>>>();
                includes.Add(x => x.Producto);
                includes.Add(x => x.Seccion);

                var inventarios = await _inventarioRepository.GetAsync(filter, null, includes);

                List<ListarInventariosDTO> data = (from x in inventarios
                                                   select new ListarInventariosDTO
                                                   {
                                                       ProductoId = x.ProductoId,
                                                       Producto = x.Producto.Nombre,
                                                       SeccionId = x.SeccionId,
                                                       Seccion = x.Seccion.Nombre,
                                                       Cantidad = x.Cantidad,
                                                       FechaCreacion = x.Creado.ToString("dd/MM/yyyy HH:mm:ss"),
                                                   }).ToList();
                return data;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message);
            }
        }
    }
}