using Microsoft.Extensions.DependencyInjection;
using Bodega.Application.Command.Productos.Actualizar;
using MediatR;
using FluentValidation;
using System.Reflection;
using Bodega.Application.Behaviors;

namespace Bodega.Application
{
    public static class ApplicationServiceRegistration
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
            services.AddValidatorsFromAssemblyContaining<ActualizarProductoCommandValidator>();
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));

            return services;
        }
    }
}