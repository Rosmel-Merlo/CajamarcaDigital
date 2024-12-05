
using MediatR;

namespace Bodega.Application.Command.Categorias.Crear
{
    public class CrearCategoriaCommand : IRequest<string>
    {
        public CrearCategoriaCommand() { }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
    }
}