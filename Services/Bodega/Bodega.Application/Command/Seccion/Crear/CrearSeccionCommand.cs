
using MediatR;

namespace Bodega.Application.Command.Seccion.Crear
{
    public class CrearSeccionCommand : IRequest<string>
    {
        public CrearSeccionCommand() { }

        public string Nombre { get; set; }
        public string Descripcion { get; set; }
    }
}