using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;
namespace CheckpointInventoryStock.API.Data
{
    public interface IChatboxRepository
    {
         Task<ChatBox> ChatBox(ChatBox request);
         Task<ShortfallChatBox> ShortfallChatBox(ShortfallChatBox request);
         Task<IEnumerable<ChatBox>> GetChatBoxs();
         
    }
}