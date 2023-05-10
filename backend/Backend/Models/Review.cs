using Backend.Models.Base;

namespace Backend.Models
{
    public class Review : BaseEntity
    {
        public Guid UserId  { get; set; }
        public User? User { get; set; }
        public Guid GameId { get; set; }
        public Game? Game { get; set; }
        public string ReviewText { get; set; } = string.Empty;
        public int Rating { get; set; } = 0;
    }
}
