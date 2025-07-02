using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Command.Productos.Actualizar
{
    public class ActualizarProductoCommandHandler : IRequestHandler<ActualizarProductoCommand, string>
    {
        private readonly IProductoRepository _productoRepository;

        public ActualizarProductoCommandHandler(IProductoRepository productoRepository)
        {
            _productoRepository = productoRepository;
        }
        public async Task<string> Handle(ActualizarProductoCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Producto producto = await _productoRepository.GetSingleAsync(x => x.ProductoId == request.ProductoId) ?? throw new Exception("Producto no encontrado");

                producto.Nombre = request.Nombre ?? producto.Nombre;
                producto.Descripcion = request.Descripcion ?? producto.Descripcion;
                producto.PrecioCompra = request.PrecioCompra ?? producto.PrecioCompra;
                producto.PrecioVenta = request.PrecioVenta ?? producto.PrecioVenta;
                producto.CategoriaId = request.CategoriaId ?? producto.CategoriaId;
                producto.StockMinimo = request.StockMinimo ?? producto.StockMinimo;
                producto.Codigo = request.Codigo ?? producto.Codigo;

                await _productoRepository.UpdateAsync(producto);

                return "se edito";
            }
            catch (System.Exception ex)
            {
                throw new Exception("Error al actualizar el producto", ex);

            }

        }
    }
}