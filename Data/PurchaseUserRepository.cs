using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CheckpointInventoryStock.API.Data
{
    public class PurchaseUserRepository : IPurchaseUserRepository
    {   
        private readonly DataContext _context;  
        public PurchaseUserRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PurchaseUser>> GetPurchaseUsers()
        {
            var  users = await _context.PurchaseUsers.ToListAsync();

            return users;
        }

        public async Task<PurchaseUser> PurchaseUser(PurchaseUser request)
        {
            await _context.PurchaseUsers.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }
    }
}