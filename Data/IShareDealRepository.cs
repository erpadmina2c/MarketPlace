using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IShareDealRepository
    {
         Task<ShareDeal> ShareDeal(ShareDeal history);
         Task<IEnumerable<ShareDeal>> GetShareDeal();
         
    }
}