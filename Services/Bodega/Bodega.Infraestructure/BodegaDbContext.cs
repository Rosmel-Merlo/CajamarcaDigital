using Bodega.Core.Entities;
using Common.Application.Helpers;
using Common.Core.Base;
using Microsoft.EntityFrameworkCore;

namespace Bodega.Infraestructure
{
    public class BodegaDbContext : DbContext
    {
        private readonly DateTimeHelper _helper = new DateTimeHelper();
        public BodegaDbContext(DbContextOptions<BodegaDbContext> options) : base(options) { }

        public DbSet<Categoria> Categorias { get; set; } = null!;
        public DbSet<Inventario> Inventarios { get; set; } = null!;
        public DbSet<Producto> Productos { get; set; } = null!;
        public DbSet<Proveedor> Proveedores { get; set; } = null!;
        public DbSet<Proveedor> ProveedoresProductos { get; set; } = null!;
        public DbSet<Seccion> Seccionnes { get; set; } = null!;



        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<EntityBase>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.Creado = _helper.DateTimePst();
                        //entry.Entity.CreadoPor = _userService.GetCurrentUserId();
                        break;

                    case EntityState.Modified:
                        entry.Entity.Modificado = _helper.DateTimePst();
                        // entry.Entity.Modificadopor = _userService.GetCurrentUserId();
                        break;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasDefaultSchema("bodega");
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(BodegaDbContext).Assembly);
        }
    }
}