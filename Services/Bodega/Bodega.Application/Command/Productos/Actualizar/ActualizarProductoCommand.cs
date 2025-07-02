using MediatR;

namespace Bodega.Application.Command.Productos.Actualizar
{
    public class ActualizarProductoCommand : IRequest<string>
    {
        public Guid ProductoId { get; set; } 
        public string? Nombre { get; set; }
        public string? Descripcion { get; set; }
        public decimal? PrecioCompra { get; set; }
        public decimal? PrecioVenta { get; set; }
        public Guid? CategoriaId { get; set; }
        public int? StockMinimo { get; set; }
        public string? Codigo { get; set; }

    }
}