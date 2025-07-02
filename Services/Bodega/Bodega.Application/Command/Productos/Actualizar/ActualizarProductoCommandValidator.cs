using FluentValidation;

namespace Bodega.Application.Command.Productos.Actualizar
{
    public class ActualizarProductoCommandValidator : AbstractValidator<ActualizarProductoCommand>
    {
        public ActualizarProductoCommandValidator()
        {
            RuleFor(x => x.ProductoId)
                .NotEmpty().WithMessage("El ID del producto es obligatorio.")
                .Must(id => Guid.TryParse(id.ToString(), out _)).WithMessage("El ID del producto debe ser un GUID válido.");

            RuleFor(x => x.Nombre)
                .NotEmpty().WithMessage("El nombre del producto es obligatorio.")
                .MaximumLength(100).WithMessage("El nombre del producto no puede exceder los 100 caracteres.");

            RuleFor(x => x.Descripcion)
                .MaximumLength(500).WithMessage("La descripción del producto no puede exceder los 500 caracteres.");

            RuleFor(x => x.PrecioCompra)
                .GreaterThanOrEqualTo(1).WithMessage("El precio de compra debe ser mayor o igual a cero.");

            RuleFor(x => x.PrecioVenta)
                .GreaterThanOrEqualTo(1).WithMessage("El precio de venta debe ser mayor o igual a cero.");

            RuleFor(x => x.CategoriaId)
                .NotEmpty().WithMessage("El ID del producto es obligatorio.")
                 .Must(id => Guid.TryParse(id.ToString(), out _)).WithMessage("El ID del producto debe ser un GUID válido.");

            RuleFor(x => x.StockMinimo)
                .GreaterThanOrEqualTo(0).WithMessage("El stock mínimo debe ser mayor o igual a cero.");

            RuleFor(x => x.Codigo)
                .NotEmpty().WithMessage("El código del producto es obligatorio.")
                .MaximumLength(50).WithMessage("El código del producto no puede exceder los 50 caracteres.");

        }
    }
}