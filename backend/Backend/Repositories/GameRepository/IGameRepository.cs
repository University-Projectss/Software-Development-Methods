using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.GameRepository
{
    public interface IGameRepository : IGenericRepository<Game>
    {
        public Game GetGameByName (string Name);
    }
}
