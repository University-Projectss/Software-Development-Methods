using Backend.Data;
using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.GameRepository
{
    public class GameRepository : GenericRepository<Game>, IGameRepository
    {
        public GameRepository(DataBaseContext dataBaseContext) : base(dataBaseContext)
        {
        }

        public Game GetGameByName(string name)
        {
            return _table.FirstOrDefault(t => t.Name == name);
        }
    }
}
