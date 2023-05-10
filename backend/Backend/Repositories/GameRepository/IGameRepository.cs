using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.GameRepository
{
    public interface IGameRepository : IGenericRepository<Game>
    {
<<<<<<< HEAD
        public Game GetUserByGamename(string gamename);
=======
        public Game GetGameByName (string Name);
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
    }
}
