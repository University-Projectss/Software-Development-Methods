using Backend.Models;
using Backend.Repositories.MessageRepository;
using Backend.Repositories.UserRepository;
using Backend.Services.UserService;

namespace Backend.Services.MessageService
{
    public class MessageService : IMessageService
    {
        public IMessageRepository _messageRepository { get; set; }
        public IUserRepository _userRepository { get; set; }
        public IUserService _userService { get; set; }

        public MessageService(IMessageRepository messageRepository, IUserRepository userRepository, IUserService userService)
        {
            _messageRepository = messageRepository;
            _userRepository = userRepository;
            _userService = userService;

        }

        public async Task Create(string username, string textMessage)
        {
            var user = _userRepository.GetUserByUsername(username);

            Message message = new()
            {
                Username = user.UserName,
                TextMessage = textMessage,
                User = user

            };
            /*if (user.Messages == null)
            {
                user.Messages = new List<Message>();
            }
            user.Messages.Add(message);
*/
            /*await _userService.Update(user.Id,user);*/
            await _messageRepository.CreateAsync(message);
            await _messageRepository.SaveAsync();
        }

        public Task<List<Message>> GetAll()
        {
            return _messageRepository.GetAll();
        }
    }
}
