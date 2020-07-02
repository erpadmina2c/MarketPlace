using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IHistoryRepository
    {      
         Task<History> History(History history);
         Task<IEnumerable<History>> GetHistory();
         Task<DealLog> DealLog(DealLog history);
    }
}