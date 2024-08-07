using System;
namespace Common.Core.Base
{
    public abstract class EntityBase
    {
        public DateTime Created { get; set; }
        public DateTime? Modified { get; set; }
        public DateTime? Deleted { get; set; }
    }
}