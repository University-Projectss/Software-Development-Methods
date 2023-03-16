namespace Backend.Models.DTOs
{
    public class UserResponseDTO
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }

        public UserResponseDTO(User user, string token)
        {
            Id = user.Id;
            UserName = user.UserName;
            Email = user.Email;
            Token = token;
        }

    }
}
