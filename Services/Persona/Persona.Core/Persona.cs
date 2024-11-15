using Common.Core.Base;
using Persona.Core.Entities;

namespace Persona.Core
{
    public class Persona : EntityBase
    {
        public Guid PersonaId { get; set; }
        public required string PrimerNombre { get; set; }
        public string? SegundoNombre { get; set; }
        public required string PrimerApellido { get; set; }
        public required string SegundoApellido { get; set; }
        public required Guid DocumentoEntidadId { get; set; }
        public required DocumentoEntidad DocumentoEntidad { get; set; }
        public string? Edad { get; set; }
        public string? NumeroContacto { get; set; }
        public string? Foto { get; set; }

    }

}