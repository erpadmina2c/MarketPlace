using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class HistoryRepository : IHistoryRepository
    {
        private readonly DataContext _context;
        public HistoryRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<History> History(History request)
        {            
            await _context.History.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<DealLog> DealLog(DealLog request)
        {            
            await _context.DealLogs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<History> GetHistory(int id)
        {
            var  result = await _context.History.FirstOrDefaultAsync(u => u.Id == id);
            
            return result;

        }

        public async Task<IEnumerable<History>> GetHistorys()
        {
            var  result = await _context.History.ToListAsync();

            return result;
        }

        public Task<IEnumerable<History>> GetHistory()
        {
            throw new NotImplementedException();
        }
    }
}