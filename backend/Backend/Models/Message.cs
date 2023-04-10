using Backend.Models.Base;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography.X509Certificates;

namespace Backend.Models
{
    public class Message : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Username { get; set; } = String.Empty;
        public string TextMessage { get; set; } = String.Empty;
        public DateTime MessageTimeStamp { get; set; } = DateTime.Now;

        public User User { get; set; } 

        
    }
}
