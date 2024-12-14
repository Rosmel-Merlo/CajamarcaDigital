
using MediatR;

namespace Bodega.Application.Queries.Categorias.ListarCategoria
{
    public class ListarCategoriaQuery : IRequest<List<ListarCategoriaDTO>>
    {
        public ListarCategoriaQuery() { }
    }
}