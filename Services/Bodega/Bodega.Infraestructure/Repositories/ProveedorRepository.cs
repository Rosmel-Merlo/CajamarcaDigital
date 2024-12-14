
using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class ProveedorRepository : RepositoryBase<Proveedor>, IProveedorRepository
    {
        public ProveedorRepository(BodegaDbContext dbContext) : base(dbContext)
        {
        }

    }
}