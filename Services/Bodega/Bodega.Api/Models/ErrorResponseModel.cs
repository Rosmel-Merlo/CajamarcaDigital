
namespace Bodega.Api.Models
{
    public class ErrorResponseModel
    {
        public required IEnumerable<string> Mensaje { get; set; }
        public required string TipoError { get; set; }
        public int StatusCode { get; set; }
    }
}
