
using Microsoft.EntityFrameworkCore;
using Persona.Infrastructure.Configuration;
using PersonaEntity = Persona.Core.Persona;

namespace Persona.Infrastructure
{
    public class PersonaDbContext : DbContext
    {
        public PersonaDbContext(DbContextOptions<PersonaDbContext> options) : base(options) { }

        public DbSet<PersonaEntity> Personas { get; set; }



        public void ModelConfiguration(ModelBuilder modelBuilder)
        {
            new PersonaConfiguration(modelBuilder.Entity<PersonaEntity>());
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasDefaultSchema("per");
            ModelConfiguration(modelBuilder);
        }
    }
}