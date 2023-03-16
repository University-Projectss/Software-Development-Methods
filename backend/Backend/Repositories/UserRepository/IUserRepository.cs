using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.UserRepository
{
    public interface IUserRepository : IGenericRepository<User>
    {
        public User GetUserByEmail(string email);
        public User GetUserByUsername(string username);
    }
}
