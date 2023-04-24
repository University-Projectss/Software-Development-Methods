using Backend.Models.Base;

namespace Backend.Models
{
    public class Game : BaseEntity
    {
        public string Name { get; set; }
        public string GameType { get; set; }

        public ICollection<Review>? Reviews { get; set; } = null;
    }
}
