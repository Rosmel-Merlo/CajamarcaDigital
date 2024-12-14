using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bodega.Application.Queries.Categorias.ListarCategoria
{
    public class ListarCategoriaDTO 
    {
        public string CategoriaId { get; set; }
        public string NombreCategoria { get; set; }
        public string Descripcion { get; set; }
        public string Codigo { get; set; }
    }
}