
using Bodega.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bodega.Infraestructure.Configuration
{
    public class InventarioConfiguration : IEntityTypeConfiguration<Inventario>
    {

        public void Configure(EntityTypeBuilder<Inventario> builder)
        {
            builder.HasKey(i => new { i.ProductoId, i.SeccionId });
            builder.ToTable("Inventarios");

            builder.HasOne(i => i.Producto)
                    .WithMany(p => p.Inventarios) // Un producto tiene muchos inventarios
                    .HasForeignKey(i => i.ProductoId)
                    .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(i => i.Seccion)
                   .WithMany(s => s.Inventarios) // Una sección tiene muchos inventarios
                   .HasForeignKey(i => i.SeccionId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}