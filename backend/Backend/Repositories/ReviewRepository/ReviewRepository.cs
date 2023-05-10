using Backend.Data;
using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.ReviewRepository
{
    public class ReviewRepository : GenericRepository<Review>, IReviewRepository
    {
        public ReviewRepository(DataBaseContext dataBaseContext) : base(dataBaseContext)
        {
        }

        public async Task<List<Review>> GetAllbyGameID(Guid id)
        {
             return _table.Where(Review => Review.GameId == id).ToList();
        }
    }
}
