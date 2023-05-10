using Backend.Models.Base;

namespace Backend.Models
{
    public class Review : BaseEntity
    {
<<<<<<< HEAD
        public Guid UserId  { get; set; }
        public User? User { get; set; }
        public Guid GameId { get; set; }
        public Game? Game { get; set; }
        public string ReviewText { get; set; } = string.Empty;
=======
        public Guid GameId { get; set; }

        public Guid UserId { get; set; }

        public User? User { get; set; }

        public Game? Game { get; set; }

        public string ReviewText { get; set; } = null;

>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a
        public int Rating { get; set; } = 0;
    }
}
