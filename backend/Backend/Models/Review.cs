using Backend.Models.Base;

namespace Backend.Models
{
    public class Review : BaseEntity
    {
        public Guid GameId { get; set; }

        public Guid UserId { get; set; }

        public User? User { get; set; }

        public Game? Game { get; set; }

        public string ReviewText { get; set; } = null;

        public int Rating { get; set; } = 0;
    }
}
