using Backend.Models;
using Backend.Repositories.GenericRepository;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Backend.Repositories.ReviewRepository
{
    public interface IReviewRepository : IGenericRepository<Review>
    {
        public Task<List<Review>> GetAllbyGameID(Guid id);
    }
}
