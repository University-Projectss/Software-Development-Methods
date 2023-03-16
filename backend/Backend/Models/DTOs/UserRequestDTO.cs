using System.ComponentModel.DataAnnotations;

namespace Backend.Models.DTOs
{
    public class UserRequestDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
