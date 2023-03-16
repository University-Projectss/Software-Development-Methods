using Backend.Models.DTOs;
using Backend.Services.UserService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("create-user")]

        public async Task<IActionResult> CreateUser(UserRequestDTO user)
        {
            await _userService.Create(user);
            var res = _userService.Authentificate(user);
            if (res == null)
            {
                return BadRequest("Invalid Authentification attempt!");
            }
            return Ok(res.Token);
        }

        [HttpGet("GetAll-users")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await this._userService.GetAll());
        }

        [HttpPost("login-user")]
        public IActionResult Login(UserRequestDTO user)
        {
            var res = _userService.Authentificate(user);
            if (res == null)
            {
                return BadRequest("Invalid Authentification attempt!");
            }
            return Ok(res.Token);
        }
    }
}
