using Bodega.Application.Repositories;
using EntitySeccion = Bodega.Core.Entities.Seccion;
using MediatR;

namespace Bodega.Application.Command.Seccion.Crear
{
    public class CrearSeccionCommandHandler : IRequestHandler<CrearSeccionCommand, string>
    {
        private readonly ISeccionRepository _seccionRepository;
        public CrearSeccionCommandHandler(
            ISeccionRepository seccionRepository
        )
        {
            _seccionRepository = seccionRepository;
        }
        public async Task<string> Handle(CrearSeccionCommand request, CancellationToken cancellationToken)
        {
            try
            {
                EntitySeccion entidad = new EntitySeccion()
                {
                    Nombre = request.Nombre,
                    Description = request.Descripcion
                };

                await _seccionRepository.AddAsync(entidad);
                return "Registrado";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}