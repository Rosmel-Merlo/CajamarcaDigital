namespace Bodega.Application.Queries.Inventarios.ListarInventarios
{
    public class ListarInventariosDTO
    {
        public ListarInventariosDTO(){}
        public Guid ProductoId { get; set; }
        public string Producto { get; set; }
        public Guid SeccionId { get; set; }
        public string Seccion { get; set; }
        public int Cantidad { get; set; }
        public string FechaCreacion { get; set; }
    }
}