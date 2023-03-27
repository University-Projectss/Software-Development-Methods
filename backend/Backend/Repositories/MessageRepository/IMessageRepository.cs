using Backend.Models;
using Backend.Repositories.GenericRepository;

namespace Backend.Repositories.MessageRepository
{
    public interface IMessageRepository : IGenericRepository<Message>
    {
    }
}
