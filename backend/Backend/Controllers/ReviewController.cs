using Backend.Models.DTOs;
using Backend.Repositories.ReviewRepository;
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
        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpPost]
        public async Task<IActionResult> NewReviwe(string username, string namegame, string reviewText, int rating)
        {
            await _reviewService.Create(username, namegame, reviewText, rating);
            return Ok("done");
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _reviewService.GetAll());
        }
    }
}
