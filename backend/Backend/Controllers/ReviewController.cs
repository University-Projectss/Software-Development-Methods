using Backend.Models.DTOs;
using Backend.Repositories.ReviewRepository;
using Backend.Services.GameService;
using Backend.Services.ReviewService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        public readonly IReviewService _reviewService;
        public readonly IGameService _gameService;
        public ReviewController(IReviewService reviewService, IGameService gameService)
        {
            _reviewService = reviewService;
            _gameService = gameService;
        }

        [HttpPost("Create")]
        public async Task<IActionResult> NewReviwe(string username, string namegame, string reviewText, int rating)
        {
            await _reviewService.Create(username, namegame, reviewText, rating);
            return Ok("done");
        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _reviewService.GetAll());
        }
        [HttpGet("GetAllbyGameId")]
        public async Task<IActionResult> GetAllbyGame(string gamename)
        {

            Guid id = _gameService.GetByGameName(gamename).Id;
            return Ok(await _reviewService.GetAllByGameId(id));
        }

    }
}
