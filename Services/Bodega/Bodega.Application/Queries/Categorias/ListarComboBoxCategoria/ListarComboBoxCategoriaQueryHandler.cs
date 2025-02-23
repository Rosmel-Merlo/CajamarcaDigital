using System.Linq.Expressions;
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using MediatR;

namespace Bodega.Application.Queries.Categorias.ListarComboBoxCategoria
{
    public class ListarComboBoxCategoriaQueryHandler : IRequestHandler<ListarComboBoxCategoriaQuery, List<ListarComboBoxCategoriaDTO>>
    {
        private readonly ICategoriaRepository _categoriaRepository;
        public ListarComboBoxCategoriaQueryHandler(ICategoriaRepository categoriaRepository)
        {
            _categoriaRepository = categoriaRepository;
        }
        public async Task<List<ListarComboBoxCategoriaDTO>> Handle(ListarComboBoxCategoriaQuery request, CancellationToken cancellationToken)
        {
            try
            {
                Expression<Func<Categoria, bool>> predicate = x => x.Eliminado == null;
                var dataCategorias = await _categoriaRepository.GetAsync(predicate);

                List<ListarComboBoxCategoriaDTO> data = (from x in dataCategorias
                                                         select new ListarComboBoxCategoriaDTO
                                                         {
                                                             Key = x.CategoriaId,
                                                             Text = x.Nombre
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