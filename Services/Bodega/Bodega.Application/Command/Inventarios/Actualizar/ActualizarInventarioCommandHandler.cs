using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Command.Inventarios.Actualizar
{
    public class ActualizarInventarioCommandHandler : IRequestHandler<ActualizarInventarioCommand, string>
    {
        private readonly IInventarioRepository _inventarioRepository;
        public ActualizarInventarioCommandHandler(IInventarioRepository inventarioRepository)
        {
            _inventarioRepository = inventarioRepository;
        }
        public async Task<string> Handle(ActualizarInventarioCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<Inventario, bool>> filter = x => x.ProductoId == request.ProductoId && x.SeccionId == request.SeccionId;
                Inventario? inventario = await _inventarioRepository.GetSingleAsync(filter);
                if (inventario == null)
                {
                    throw new System.Exception("Inventario no encontrado");
                }
                inventario.Cantidad = request.Cantidad;
                await _inventarioRepository.UpdateAsync(inventario);

                return "Inventario actualizado";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception(ex.Message);
            }
        }
    }
}