using MediatR;

namespace Bodega.Application.Command.Inventarios.Actualizar
{
    public class ActualizarInventarioCommand : IRequest<string>
    {
        public ActualizarInventarioCommand()
        {
        }
        public Guid ProductoId { get; set; }
        public Guid SeccionId { get; set; }
        public int Cantidad { get; set; }
    }
}