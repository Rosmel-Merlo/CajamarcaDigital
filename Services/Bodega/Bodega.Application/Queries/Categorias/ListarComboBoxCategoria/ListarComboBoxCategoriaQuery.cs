using MediatR;

namespace Bodega.Application.Queries.Categorias.ListarComboBoxCategoria
{
    public class ListarComboBoxCategoriaQuery : IRequest<List<ListarComboBoxCategoriaDTO>>
    {
        public ListarComboBoxCategoriaQuery()
        {
        }
    }
}