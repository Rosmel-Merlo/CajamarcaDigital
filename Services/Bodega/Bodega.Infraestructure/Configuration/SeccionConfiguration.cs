
using Bodega.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bodega.Infraestructure.Configuration
{
    public class SeccionConfiguration : IEntityTypeConfiguration<Seccion>
    {
        public void Configure(EntityTypeBuilder<Seccion> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(x => x.SeccionId);
            entityTypeBuilder.ToTable("Secciones");
            entityTypeBuilder.Property(x => x.Nombre).IsRequired(true);
            entityTypeBuilder.Property(x => x.Description).IsRequired(false);
        }
    }
}