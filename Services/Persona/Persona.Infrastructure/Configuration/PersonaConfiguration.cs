using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PersonaEntity = Persona.Core.Persona;

namespace Persona.Infrastructure.Configuration
{
    public class PersonaConfiguration
    {
        public PersonaConfiguration(EntityTypeBuilder<PersonaEntity> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(x => x.PersonaId);
        }
    }
}