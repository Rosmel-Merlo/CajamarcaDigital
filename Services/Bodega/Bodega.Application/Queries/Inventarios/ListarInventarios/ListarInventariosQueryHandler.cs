using MediatR;

namespace Bodega.Application.Queries.Inventarios.ListarInventarios
{
    public class ListarInventariosQueryHandler : IRequestHandler<ListarInventariosQuery, List<ListarInventariosDTO>>
    {
        
        public ListarInventariosQueryHandler() { }


        public Task<List<ListarInventariosDTO>> Handle(ListarInventariosQuery request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}