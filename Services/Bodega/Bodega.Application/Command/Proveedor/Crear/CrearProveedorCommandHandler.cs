using Bodega.Application.Repositories;
using MediatR;
using EntityProveedor = Bodega.Core.Entities.Proveedor;

namespace Bodega.Application.Command.Proveedor.Crear
{
    public class CrearProveedorCommandHandler : IRequestHandler<CrearProveedorCommand, string>
    {
        private readonly IProveedorRepository _proveedorRepository;

        public CrearProveedorCommandHandler(
            IProveedorRepository proveedorRepository
        )
        {
            _proveedorRepository = proveedorRepository;
        }
        public async Task<string> Handle(CrearProveedorCommand request, CancellationToken cancellationToken)
        {
            try
            {
                EntityProveedor entityProveedor = new EntityProveedor
                {
                    Ruc = request.Ruc,
                    NombreContacto = request.NombreContacto,
                    TelefonoContacto = request.TelefonoContacto,
                    Telefono = request.Telefono,
                    Email = request.Email,
                    Direccion = request.Direccion,
                };

                await _proveedorRepository.AddAsync(entityProveedor);

                return "Correcto";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}