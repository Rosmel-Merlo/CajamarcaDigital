using Bodega.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bodega.Infraestructure.Configuration
{
       public class ProveedorProductoConfiguration : IEntityTypeConfiguration<ProveedorProducto>
       {
              public void Configure(EntityTypeBuilder<ProveedorProducto> builder)
              {
                     // Configuración de la clave compuesta
                     builder.HasKey(pp => new { pp.ProveedorId, pp.ProductoId });
                     builder.ToTable("ProveedoresProductos");

                     // Índices individuales opcionales (útiles si buscas con frecuencia por estas claves de forma aislada)
                     builder.HasIndex(pp => pp.ProveedorId)
                            .HasDatabaseName("IX_ProveedorProducto_ProveedorId");
                     builder.HasIndex(pp => pp.ProductoId)
                            .HasDatabaseName("IX_ProveedorProducto_ProductoId");

                     // Configuración de las relaciones
                     builder.HasOne(pp => pp.Proveedor)
                            .WithMany(p => p.ProveedorProductos)
                            .HasForeignKey(pp => pp.ProveedorId)
                            .OnDelete(DeleteBehavior.Restrict);

                     builder.HasOne(pp => pp.Producto)
                            .WithMany(p => p.ProveedorProductos)
                            .HasForeignKey(pp => pp.ProductoId)
                            .OnDelete(DeleteBehavior.Restrict);

                     // Propiedades adicionales
                     builder.Property(pp => pp.Precio)
                            .HasColumnType("decimal(18,4)");

                     builder.Property(pp => pp.FechaSuministro)
                            .IsRequired();
              }
       }
}
