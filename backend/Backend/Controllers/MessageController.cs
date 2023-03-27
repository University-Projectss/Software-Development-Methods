using Backend.Repositories.MessageRepository;
using Backend.Services.MessageService;
using Backend.Services.UserService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        public readonly IMessageService _messageService;
        public readonly IMessageRepository _messageRepository;

        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [HttpPost("create-message")]
        public async Task<IActionResult> CreateMessage(string username, string textMessage)
        {
            await _messageService.Create(username, textMessage);
            return Ok();
        }
        [HttpGet("GetAll-Messages")]
        public async Task<IActionResult> GetAllMessages()
        {
            return Ok(await _messageService.GetAll());
        }
    }
}
