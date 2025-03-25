using MediatR;

namespace Bodega.Application.Command.Seccion.Eliminar
{
    
    public class EliminarSeccionCommand : IRequest<string>
    {
        public EliminarSeccionCommand() { }
        public Guid SeccionId { get; set; }
    }
}