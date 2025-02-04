using Bodega.Application.Repositories;
using Bodega.Core.Entities;
using Common.Infrastructure.Repositories;

namespace Bodega.Infraestructure.Repositories
{
    public class ProveedorProductoRepository :RepositoryBase<ProveedorProducto>, IProveedorProductoRepository
    {
        public ProveedorProductoRepository(BodegaDbContext dbcontext) :base(dbcontext){}
    }
}