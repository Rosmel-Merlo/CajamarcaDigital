
using MediatR;

namespace Bodega.Application.Queries.Proveedores.ListarProveedores
{
    public class ListarProveedoresQuery : IRequest<List<ListarProveedoresDTO>>
    {
        public ListarProveedoresQuery() { }
    }
}