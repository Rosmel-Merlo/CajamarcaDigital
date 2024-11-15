using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonaEntity = Persona.Core.Persona;

namespace Persona.Infrastructure.Configuration
{
    public class PersonaConfiguration
    {
        public PersonaConfiguration(EntityTypeBuilder<PersonaEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(x => x.PersonaId);
            entityTypeBuilder.HasOne(x => x.DocumentoEntidad)
                .WithMany(d => d.Personas)  // Una DocumentoEntidad tiene muchas Personas
                .HasForeignKey(x => x.DocumentoEntidadId);  // Llave foránea en Persona

            entityTypeBuilder.Property(x => x.PrimerNombre).IsRequired(true);
            entityTypeBuilder.Property(x => x.SegundoNombre).IsRequired(false);
            entityTypeBuilder.Property(x => x.PrimerApellido).IsRequired(true);
            entityTypeBuilder.Property(x => x.SegundoApellido).IsRequired(true);
            entityTypeBuilder.Property(x => x.Edad).IsRequired(false);
            entityTypeBuilder.Property(x => x.NumeroContacto).IsRequired(false);
            entityTypeBuilder.Property(x => x.Foto).IsRequired(false);
        }
    }
}