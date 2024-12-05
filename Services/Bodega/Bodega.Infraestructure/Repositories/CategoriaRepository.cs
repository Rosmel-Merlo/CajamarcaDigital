

using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class CategoriaRepository : RepositoryBase<Categoria>, ICategoriaRepository
    {
        public CategoriaRepository(BodegaDbContext dbContext) : base(dbContext)
        {
        }
    }
}