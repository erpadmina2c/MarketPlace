using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IViewchatRepository
    {
         
         Task<Viewchat> Viewchat(Viewchat request);
         Task<ShortfallViewchat> ShortfallViewchat(ShortfallViewchat request);
         Task<IEnumerable<Viewchat>> GetViewchats();
    }
}