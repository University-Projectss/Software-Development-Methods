using Backend.Models.Base;
<<<<<<< HEAD
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
=======
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a

namespace Backend.Models
{
    public class Game : BaseEntity
    {
<<<<<<< HEAD
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Name { get; set; } =string.Empty;
        public string GameType { get; set; } = string.Empty;    
=======
        public string Name { get; set; }
        public string GameType { get; set; }
>>>>>>> c4bb946cca7a745bc1a9caeed891577d822a661a

        public ICollection<Review>? Reviews { get; set; } = null;
    }
}
