using Backend.Models;
using Backend.Repositories.GenericRepository;
<<<<<<< HEAD
using Microsoft.EntityFrameworkCore.Metadata.Internal;
=======
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a

namespace Backend.Repositories.ReviewRepository
{
    public interface IReviewRepository : IGenericRepository<Review>
    {
<<<<<<< HEAD
        public Task<List<Review>> GetAllbyGameID(Guid id);
=======
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
    }
}
