<<<<<<< HEAD
﻿using AutoMapper;
using Backend.Models;
using Backend.Models.DTOs;
using Backend.Repositories.GameRepository;

namespace Backend.Services.GameService
{
    public class GameService : IGameService
    {
        public IGameRepository _gameRepository { get; set; }
        public IMapper _mapper;
        public GameService(IGameRepository gameRepository, IMapper mapper)
        {
            _gameRepository = gameRepository;
            _mapper = mapper;
        }
        public async Task Create(GameDTO game)
        {
            var newGame = _mapper.Map<Game>(game);


            await _gameRepository.CreateAsync(newGame);
            await _gameRepository.SaveAsync();
        }

        public Game GetByGameName(string gamename)
        {
             return _gameRepository.GetUserByGamename(gamename);
=======
﻿using Backend.Models;
using Backend.Repositories.GameRepository;
using Backend.Repositories.UserRepository;
using Backend.Services.UserService;

namespace Backend.Services.MessageService
{
    public class GAmeService : IGameService
    {
        public IGameRepository _GameRepository { get; set; }
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
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
        }
    }
}
