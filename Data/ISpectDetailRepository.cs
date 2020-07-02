using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface ISpectDetailRepository
    {
         Task<SpectDetail> SpectDetail(SpectDetail request);
         Task<IEnumerable<SpectDetail>> GetRequests();
         
    }
}