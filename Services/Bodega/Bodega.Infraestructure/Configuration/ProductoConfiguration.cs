using Bodega.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bodega.Infraestructure.Configuration
{
    public class ProductoConfiguration : IEntityTypeConfiguration<Producto>
    {
        public void Configure(EntityTypeBuilder<Producto> builder)
        {
            builder.HasKey(x => x.ProductoId);

            builder.ToTable("Productos");

            builder.Property(x => x.Nombre)
                    .HasMaxLength(20);

            builder.Property(x => x.Descripcion)
                    .HasMaxLength(60);

            builder.Property(pp => pp.PrecioCompra)
                    .HasColumnType("decimal(18,4)");

            builder.Property(pp => pp.PrecioVenta)
                    .HasColumnType("decimal(18,4)");

            builder.HasOne(p => p.Categoria)
                    .WithMany(c => c.Productos)
                    .HasForeignKey(p => p.CategoriaId)
                    .OnDelete(DeleteBehavior.Restrict);
        }
    }
}