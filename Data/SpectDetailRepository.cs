using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class SpectDetailRepository : ISpectDetailRepository
    { 
        private readonly DataContext _context;
        public SpectDetailRepository(DataContext context)
        {
            _context = context;

        }
        public Task<IEnumerable<SpectDetail>> GetRequests()
        {
            throw new System.NotImplementedException();
        }

        public async Task<SpectDetail> SpectDetail(SpectDetail request)
        {
            await _context.SpectDetails.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }
    }
}