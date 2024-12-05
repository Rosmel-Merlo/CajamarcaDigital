
using Common.Core.Base;

namespace Bodega.Core.Entities
{
    public class Categoria : EntityBase
    {
        public Categoria()
        {
        }

        public Categoria(string nombre, string descripcion, string codigo)
        {
            Nombre = nombre;
            Descripcion = descripcion;
            Codigo = codigo;
        }

        public Guid CategoriaId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
        public ICollection<Producto> Productos { get; set; } = new List<Producto>();


    }
}