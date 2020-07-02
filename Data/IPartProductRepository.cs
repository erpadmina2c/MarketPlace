using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IPartProductRepository
    {
         Task<PartProduct> PartProduct (PartProduct request);
         Task<IEnumerable<PartProduct>> GetPartProducts();
         
    }
}