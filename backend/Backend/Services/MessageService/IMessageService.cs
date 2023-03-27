using Backend.Models;
using Backend.Models.DTOs;

namespace Backend.Services.MessageService
{
    public interface IMessageService
    {
        Task Create(string username, string textMessage);
        Task<List<Message>> GetAll();
    }
}
