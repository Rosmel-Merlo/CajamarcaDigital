
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Command.Inventarios.Crear
{
    public class CrearInventarioCommandHandler : IRequestHandler<CrearInventarioCommand, string>
    {
        private readonly IInventarioRepository _inventarioRepository;
        public CrearInventarioCommandHandler(IInventarioRepository inventarioRepository)
        {
            _inventarioRepository = inventarioRepository;
        }
        public async Task<string> Handle(CrearInventarioCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Inventario inventario = new Inventario()
                {
                    ProductoId = Guid.Parse(request.ProductoId),
                    SeccionId = Guid.Parse(request.SeccionId),
                    Cantidad = request.Cantidad
                };

                await _inventarioRepository.AddAsync(inventario);
                return "Registrado";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}