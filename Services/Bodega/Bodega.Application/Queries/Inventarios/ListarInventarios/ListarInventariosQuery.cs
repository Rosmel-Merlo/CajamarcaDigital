using MediatR;

namespace Bodega.Application.Queries.Inventarios.ListarInventarios
{
    public class ListarInventariosQuery : IRequest<List<ListarInventariosDTO>>
    {
    }
}