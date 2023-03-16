using Backend.Data;
using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.UserRepository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DataBaseContext dataBaseContext) : base(dataBaseContext)
        {
        }

        public User GetUserByEmail(string email)
        {
            return _table.FirstOrDefault(t => t.Email == email);
        }

        public User GetUserByUsername(string username)
        {
            return _table.FirstOrDefault(t => t.UserName == username);
        }
    }
}
