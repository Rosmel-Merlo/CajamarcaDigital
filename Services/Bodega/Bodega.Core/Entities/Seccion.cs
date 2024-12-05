
using Common.Core.Base;

namespace Bodega.Core.Entities
{
    public class Seccion : EntityBase
    {
        public Seccion() { }
        public Guid SeccionId { get; set; }
        public string Nombre { get; set; }
        public string Description { get; set; }
        public ICollection<Inventario> Inventarios { get; set; } = new List<Inventario>();


    }
}