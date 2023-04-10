using Backend.Models;

namespace Backend.Services.ReviewService
{
    public interface IReviewService
    {
        Task Create(string username,string gamename, string reviewText, int rating);
        Task<List<Review>> GetAll();
    }
}
