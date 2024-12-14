

using Bodega.Application.Repositories;
using MediatR;

namespace Bodega.Application.Queries.Secciones.ListarSecciones
{
    public class ListarSeccionesQueryHandler : IRequestHandler<ListarSeccionesQuery, List<ListarSeccionesDTO>>
    {

        private readonly ISeccionRepository _seccionRepository;
        public ListarSeccionesQueryHandler(
            ISeccionRepository seccionRepository
        )
        {

            _seccionRepository = seccionRepository;
        }

        public async Task<List<ListarSeccionesDTO>> Handle(ListarSeccionesQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var data = await _seccionRepository.GetAllAsync();

                List<ListarSeccionesDTO> dataSecciones = (from x in data
                                                          select new ListarSeccionesDTO()
                                                          {
                                                              SeccionId = x.SeccionId.ToString(),
                                                              Nombre = x.Nombre,
                                                              Descripcion = x.Description,
                                                          }).ToList();

                return dataSecciones;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}