

using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class ProductoRepository : RepositoryBase<Producto>, IProductoRepository
    {
        public ProductoRepository(BodegaDbContext dbContext) : base(dbContext) { }
    }
}