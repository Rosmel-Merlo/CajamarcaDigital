
using MediatR;

namespace Bodega.Application.Command.Proveedor.Crear
{
    public class CrearProveedorCommand : IRequest<string>
    {
        public CrearProveedorCommand() { }
        public string Ruc { get; set; }
        public string NombreContacto { get; set; }
        public string TelefonoContacto { get; set; }
        public string Tefono { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }
    }
}