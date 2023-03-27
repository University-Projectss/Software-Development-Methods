using Backend.Models.Base;
using System.Security.Cryptography.X509Certificates;

namespace Backend.Models
{
    public class Message : BaseEntity
    {
        public string Username { get; set; } = String.Empty;
        public string TextMessage { get; set; } = String.Empty;
        public DateTime MessageTimeStamp { get; set; } = DateTime.Now;

        public User? User { get; set; } = null;

        
    }
}
