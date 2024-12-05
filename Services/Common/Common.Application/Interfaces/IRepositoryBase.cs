

using Common.Core.Base;

namespace Common.Application.Interfaces
{
    public interface IRepositoryBase<T> where T : EntityBase
    {
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<T> AddAsync(T entity);
    }
}