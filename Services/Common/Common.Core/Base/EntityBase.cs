using System;
namespace Common.Core.Base
{
    public abstract class EntityBase
    {
        public DateTime Creado { get; set; }
        public DateTime CreadoPor { get; set; }
        public DateTime? Modificado { get; set; }
        public DateTime? ModificadoPor { get; set; }
        public DateTime? Eliminado { get; set; }
        public DateTime? EliminadoPor { get; set; }

    }
}