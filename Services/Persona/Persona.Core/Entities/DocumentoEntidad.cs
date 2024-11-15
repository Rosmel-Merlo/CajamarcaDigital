
using Common.Core.Base;

namespace Persona.Core.Entities
{
    public class DocumentoEntidad : EntityBase
    {
        public Guid DocumentoEntidadId { get; set; }
        public required string Nombre { get; set; }
        public required string Codigo { get; set; }
        public required string Orden { get; set; }

        public ICollection<Persona> Personas { get; set; } = new List<Persona>();

    }
}