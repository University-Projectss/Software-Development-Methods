using Backend.Models.Base;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Game : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; } =string.Empty;
        public string GameType { get; set; } = string.Empty;    

        public ICollection<Review>? Reviews { get; set; } = null;
    }
}
