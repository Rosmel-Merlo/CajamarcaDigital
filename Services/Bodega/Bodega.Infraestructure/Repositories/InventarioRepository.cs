using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class InventarioRepository : RepositoryBase<Inventario>, IInventarioRepository
    {
        public InventarioRepository(BodegaDbContext dbContext) : base(dbContext) { }
    }
}