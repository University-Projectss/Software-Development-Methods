using Backend.Models.DTOs;
using Backend.Services.GameService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        public readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpPost("new-game")]
        public async Task<IActionResult> Create_Game(GameDTO game)
        {
            await _gameService.Create(game);
            return Ok(game);

        }

    }
}
