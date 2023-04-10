using Backend.Models;
using Backend.Repositories.GameRepository;
using Backend.Repositories.ReviewRepository;
using Backend.Repositories.UserRepository;

namespace Backend.Services.ReviewService
{
    public class ReviewService : IReviewService
    {
        public IReviewRepository _reviewRepository { get; set; }
        public IUserRepository _userRepository { get; set; }
        public IGameRepository _gameRepository { get; set; }

        public ReviewService(IReviewRepository reviewRepository, IUserRepository userRepository, IGameRepository gameRepository)
        {
            _reviewRepository = reviewRepository;
            _userRepository = userRepository;
            _gameRepository = gameRepository;
        }
        public async Task Create(string username, string gamename, string reviewText, int rating)
        {
            var user = _userRepository.GetUserByUsername(username);
            var game = _gameRepository.GetUserByGamename(gamename);

            Review review = new Review()
            {

                GameId = game.Id,
                Game = game,
                UserId = user.Id,
                User = user,
                Rating = rating,
                ReviewText = reviewText

            };

            await _reviewRepository.CreateAsync(review);
            await _reviewRepository.SaveAsync();
        }

        public Task<List<Review>> GetAll()
        {
            return _reviewRepository.GetAll();
        }
    }
}
