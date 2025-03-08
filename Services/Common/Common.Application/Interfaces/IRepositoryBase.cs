

using System.Linq.Expressions;
using Common.Core.Base;

namespace Common.Application.Interfaces
{
    public interface IRepositoryBase<T> where T : EntityBase
    {
        Task<IReadOnlyList<T>> GetAllAsync();
        Task<IReadOnlyList<T>> GetAsync(Expression<Func<T, bool>> predicate = null,
                                     Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null,
                                     List<Expression<Func<T, object>>>? includes = null,
                                     bool disableTracking = true);
        Task<T> AddAsync(T entity);
    }
}