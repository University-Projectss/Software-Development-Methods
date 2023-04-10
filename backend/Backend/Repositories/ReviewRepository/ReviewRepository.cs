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
    }
}
