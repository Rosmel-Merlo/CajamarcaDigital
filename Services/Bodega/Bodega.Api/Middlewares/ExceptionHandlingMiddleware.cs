
using System.Net;
using System.Text.Json;
using Bodega.Api.Models;

namespace Bodega.Api.Middlewares
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;
        public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unhandled exception");
                await HandleExceptionAsync(context, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception ex)
        {
            switch (ex)
            {
                case FluentValidation.ValidationException validationException:
                    context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                    context.Response.ContentType = "application/json";

                    return context.Response.WriteAsync(JsonSerializer.Serialize(new ErrorResponseModel()
                    {
                        Mensaje = validationException.Errors.Select(e => e.ErrorMessage),
                        TipoError = "Validacion",
                        StatusCode = context.Response.StatusCode
                    }));
                case NotImplementedException notImplementedException:
                    context.Response.StatusCode = (int)HttpStatusCode.NotImplemented;
                    context.Response.ContentType = "application/json";
                    return context.Response.WriteAsync(JsonSerializer.Serialize(new ErrorResponseModel()
                    {
                        Mensaje = notImplementedException.Message != null ? new[] { notImplementedException.Message } : new[] { "Not Implemented" },
                        TipoError = "No Implementado",
                        StatusCode = context.Response.StatusCode
                    }));
                
                default:
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";
                    return context.Response.WriteAsync(JsonSerializer.Serialize(new
                    {
                        error = "An unexpected error occurred.",
                        statusCode = context.Response.StatusCode
                    }));
            }
        }
    }
}