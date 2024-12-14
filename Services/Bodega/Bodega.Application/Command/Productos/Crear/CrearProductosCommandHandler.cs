using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Command.Productos.Crear
{
    public class CrearProductosCommandHandler : IRequestHandler<CrearProductosCommand, string>
    {
        private readonly IProductoRepository _productoRepository;
        public CrearProductosCommandHandler(
            IProductoRepository productoRepository
        )
        { _productoRepository = productoRepository; }
        public async Task<string> Handle(CrearProductosCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Producto producto = new Producto(request.Nombre, request.Descripcion, request.Codigo)
                {
                    PrecioCompra = request.PrecioCompra,
                    PrecioVenta = request.PrecioVenta,
                    CategoriaId = request.CategoriaId,
                    StockMinimo = request.StockMinimo,
                };
                await _productoRepository.AddAsync(producto);
                return "registrado";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}