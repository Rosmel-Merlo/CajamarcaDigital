using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.Secciones.ListarComboBoxSecciones
{
    public class ListarComboBoxSeccionesQueryHandler : IRequestHandler<ListarComboBoxSeccionesQuery, List<ListarComboBoxSeccionesDTO>>
    {
        private readonly ISeccionRepository _seccionRepository;
        public ListarComboBoxSeccionesQueryHandler(ISeccionRepository seccionRepository)
        {
            _seccionRepository = seccionRepository;
        }
        public async Task<List<ListarComboBoxSeccionesDTO>> Handle(ListarComboBoxSeccionesQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<Seccion, bool>> predicate = x => x.Eliminado == null;

                var dataSecciones = await _seccionRepository.GetAsync(predicate);

                List<ListarComboBoxSeccionesDTO> data = (from x in dataSecciones
                                                         select new ListarComboBoxSeccionesDTO
                                                         {
                                                             Key = x.SeccionId,
                                                             Text = x.Nombre
                                                         }).ToList();
                return data;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}