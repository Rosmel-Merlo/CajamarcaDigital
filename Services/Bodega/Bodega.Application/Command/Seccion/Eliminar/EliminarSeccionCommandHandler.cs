using Bodega.Application.Repositories;
using SeccionEntity = Bodega.Core.Entities.Seccion;
using MediatR;

namespace Bodega.Application.Command.Seccion.Eliminar
{
    public class EliminarSeccionCommandHandler : IRequestHandler<EliminarSeccionCommand, string>
    {
        private readonly ISeccionRepository _seccionRepository;

        public EliminarSeccionCommandHandler(ISeccionRepository seccionRepository)
        {
            _seccionRepository = seccionRepository;
        }

        public async Task<string> Handle(EliminarSeccionCommand request, CancellationToken cancellationToken)
        {
            try
            {
                SeccionEntity? result = await _seccionRepository.RemoveAsync(request.SeccionId);
                if (result == null)
                {
                    throw new Exception("No se encontró la sección");
                }
                return "Sección Eliminada";
            }
            catch (System.Exception ex)
            {
                // TODO
                throw new Exception(ex.Message);
            }
        }


    }
}