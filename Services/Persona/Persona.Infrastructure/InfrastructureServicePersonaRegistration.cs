using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Persona.Infrastructure
{
    public static class InfrastructureServicePersonaRegistration
    {
        public static IServiceCollection AddInfrastructureServicePersona(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<PersonaDbContext>(ops =>
                    ops.UseSqlServer(
                        configuration.GetConnectionString("DefaultConnection"),
                        x => x.MigrationsHistoryTable("__EFMigrationHistory", "Persona")
                        )
            );

            return services;
        }
    }
}