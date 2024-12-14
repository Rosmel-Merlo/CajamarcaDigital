

using Bodega.Application.Repositories;
using MediatR;

namespace Bodega.Application.Queries.Categorias.ListarCategoria
{
    public class ListarCategoriaQueryHandler : IRequestHandler<ListarCategoriaQuery, List<ListarCategoriaDTO>>
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public ListarCategoriaQueryHandler(ICategoriaRepository categoriaRepository)
        {
            _categoriaRepository = categoriaRepository;
        }

        public async Task<List<ListarCategoriaDTO>> Handle(ListarCategoriaQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var dataCategorias = await _categoriaRepository.GetAllAsync();
                List<ListarCategoriaDTO> data = (from x in dataCategorias
                                                 select new ListarCategoriaDTO
                                                 {
                                                     CategoriaId = x.CategoriaId.ToString(),
                                                     Codigo = x.Codigo,
                                                     Descripcion = x.Descripcion,
                                                     NombreCategoria = x.Nombre
                                                 }).ToList();

                return data;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}