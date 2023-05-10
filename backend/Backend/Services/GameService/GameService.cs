using AutoMapper;
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
        }
    }
}
