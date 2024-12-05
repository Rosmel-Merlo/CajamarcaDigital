
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Command.Categorias.Crear
{
    public class CrearCategoriaCommandHandler : IRequestHandler<CrearCategoriaCommand, string>
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public CrearCategoriaCommandHandler(
            ICategoriaRepository categoriaRepository
        )
        {
            _categoriaRepository = categoriaRepository;
        }

        public async Task<string> Handle(CrearCategoriaCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Categoria categoria = new()
                {
                    Nombre = request.Nombre,
                    Descripcion = request.Descripcion,
                    Codigo = request.Codigo,
                };

                var response = await _categoriaRepository.AddAsync(categoria);
                return "Categoria Guardado";
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }

        }
    }
}