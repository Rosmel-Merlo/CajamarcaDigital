using MediatR;

namespace Bodega.Application.Command.Inventarios.Crear
{
    public class CrearInventarioCommand : IRequest<string>
    {
        public CrearInventarioCommand() { }
        public string ProductoId { get; set; }
        public string SeccionId { get; set; }
        public int Cantidad { get; set; }
    }
}