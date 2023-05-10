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
<<<<<<< HEAD

        public async Task<List<Review>> GetAllbyGameID(Guid id)
        {
             return _table.Where(Review => Review.GameId == id).ToList();
        }
=======
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
    }
}
