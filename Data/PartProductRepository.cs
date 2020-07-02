using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CheckpointInventoryStock.API.Data
{
    public class PartProductRepository : IPartProductRepository
    {
        private readonly DataContext _context;
        public PartProductRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<IEnumerable<PartProduct>> GetPartProducts()
        {
            
            var  parts = await _context.PartProducts.ToListAsync();

            return parts;
        }

        public async Task<PartProduct> PartProduct(PartProduct request)
        {
            await _context.PartProducts.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }
    }
}