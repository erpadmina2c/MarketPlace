using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IPurchaseUserRepository
    {
         
         Task<PurchaseUser> PurchaseUser (PurchaseUser request);
         Task<IEnumerable<PurchaseUser>> GetPurchaseUsers();
    }
}