using MediatR;

namespace Bodega.Application.Queries.Secciones.ListarComboBoxSecciones
{
    public class ListarComboBoxSeccionesQuery : IRequest<List<ListarComboBoxSeccionesDTO>>
    {
        public ListarComboBoxSeccionesQuery()
        {
        }
    }
}