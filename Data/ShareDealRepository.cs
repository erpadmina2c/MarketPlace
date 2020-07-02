using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class ShareDealRepository : IShareDealRepository
    {  private readonly DataContext _context;
        public ShareDealRepository(DataContext context)
        {
            _context = context;

        }
        public Task<IEnumerable<ShareDeal>> GetShareDeal()
        {
            throw new System.NotImplementedException();
        }

        public async Task<ShareDeal> ShareDeal(ShareDeal request)
        {
            await _context.ShareDeal.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }
    }
}