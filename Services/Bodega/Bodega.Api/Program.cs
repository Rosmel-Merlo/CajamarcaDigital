using Bodega.Api.Middlewares;
using Bodega.Application;
using Bodega.Infraestructure;

var builder = WebApplication.CreateBuilder(args);
string MyAllowSpecificOrigins = "AllowSpecificOrigins";

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddControllers();


builder.Services.AddInfraestructureServiceBodega(builder.Configuration);
builder.Services.AddApplicationServices();

builder.Services.AddCors(options =>
{

    if (builder.Environment.IsDevelopment())
    {

        options.AddPolicy(MyAllowSpecificOrigins,
                          builder =>
                          {
                              builder.WithOrigins("*"
                           )
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
    }
    else
    {
        options.AddPolicy(MyAllowSpecificOrigins,
                          builder =>
                          {
                              builder.WithOrigins("http://localhost:5173/")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                          });
    }

});

// Agrega soporte para controladores

var app = builder.Build();
app.UseMiddleware<ExceptionHandlingMiddleware>();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(MyAllowSpecificOrigins);

app.UseHttpsRedirection();

// Agrega soporte para rutas de controladores
app.MapControllers();

app.Run();