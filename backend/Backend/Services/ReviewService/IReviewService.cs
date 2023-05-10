using Backend.Models;
<<<<<<< HEAD
=======
using Backend.Models.DTOs;
using Backend.Repositories.GenericRepository;
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a

namespace Backend.Services.ReviewService
{
    public interface IReviewService
    {
<<<<<<< HEAD
        Task Create(string username,string gamename, string reviewText, int rating);
        Task<List<Review>> GetAll();
        Task<List<Review>> GetAllByGameId(Guid id);  
=======


>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
    }
}
