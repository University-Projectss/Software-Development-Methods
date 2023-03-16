using AutoMapper;
using Backend.Helpers.JwtUtils;
using Backend.Models;
using Backend.Models.DTOs;
using Backend.Repositories.UserRepository;

namespace Backend.Services.UserService
{
    public class UserService : IUserService
    {
        public IUserRepository _userRepository;
        public IMapper _mapper;
        public IJwtUtils _jwtUtils;

        public UserService(IMapper mapper, IJwtUtils jwtUtils, IUserRepository userRepository)
        {
            //_customerRepository = customerRepository;
            _mapper = mapper;
            _jwtUtils = jwtUtils;
            _userRepository = userRepository;
        }

        public async Task Create(UserRequestDTO user)
        {
            var newUser = _mapper.Map<User>(user);
            newUser.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.Password);

            await _userRepository.CreateAsync(newUser);
            await _userRepository.SaveAsync();
        }

        public UserResponseDTO? Authentificate(UserRequestDTO user)
        {
            var _user = _userRepository.GetUserByUsername(user.UserName);
            if (_user == null || !BCrypt.Net.BCrypt.Verify(user.Password, _user.PasswordHash))
            {
                return null;
            }
            var jwtToken = _jwtUtils.GenerateJwtToken(_user);
            return new UserResponseDTO(_user, jwtToken);
        }
        public async Task<User?> Update(Guid id, User user)
        {
            var c = await _userRepository.FindByIdAsync(id);

            if (c == null)
                return null;

            c.UserName = user.UserName;
            c.Email = user.Email;
            c.TotalValue = user.TotalValue;

            await _userRepository.SaveAsync();

            return c;

        }

        public async Task Delete(Guid id)
        {
            var user = await _userRepository.FindByIdAsync(id);
            _userRepository.Delete(user);
            await _userRepository.SaveAsync();
        }
        public Task<List<User>> GetAll()
        {
            return _userRepository.GetAll();
        }
        public async Task<User> GetById(Guid id)
        {
            return await _userRepository.FindByIdAsync(id);
        }

    }
}
