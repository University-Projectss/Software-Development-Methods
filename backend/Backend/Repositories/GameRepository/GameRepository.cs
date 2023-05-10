using Backend.Data;
using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.GameRepository
{
    public class GameRepository : GenericRepository<Game>, IGameRepository
    {
        public GameRepository(DataBaseContext dataBaseContext) : base(dataBaseContext)
        {
<<<<<<< HEAD
       
        }
        public Game GetUserByGamename(string gamename)
        {
            return _table.FirstOrDefault(t => t.Name == gamename);
=======
        }

        public Game GetGameByName(string name)
        {
            return _table.FirstOrDefault(t => t.Name == name);
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
        }
    }
}
