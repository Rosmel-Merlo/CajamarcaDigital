using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class SeccionRepository : RepositoryBase<Seccion>, ISeccionRepository
    {
        public SeccionRepository(BodegaDbContext dbContext) : base(dbContext)
        {
        }
    }
}