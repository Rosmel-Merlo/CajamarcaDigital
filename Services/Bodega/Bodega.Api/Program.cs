using Bodega.Application;
using Bodega.Infraestructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddControllers();


builder.Services.AddInfraestructureServiceBodega(builder.Configuration);
builder.Services.AddApplicationServices();

// Agrega soporte para controladores

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Agrega soporte para rutas de controladores
app.MapControllers();

app.Run();