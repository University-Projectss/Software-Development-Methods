using Backend.Models;
using Backend.Models.DTOs;
using Backend.Repositories.GenericRepository;

namespace Backend.Services.UserService
{
    public interface IUserService
    {
        Task Create(UserRequestDTO user);
        Task Delete(Guid id);
        Task<List<User>> GetAll();
        Task<User> GetById(Guid user);
        Task<User?> Update(Guid id, User user);

        UserResponseDTO? Authentificate(UserRequestDTO user);
    }
}
