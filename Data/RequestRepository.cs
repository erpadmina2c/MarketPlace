using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class RequestRepository : IRequestRepository
    {
        private readonly DataContext _context;
        public RequestRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<Request> Request(Request request)
        {            
            await _context.Requests.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<Pricing> Pricing(Pricing request)
        {            
            await _context.Pricings.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<PurchaseOrder> PurchaseOrder(PurchaseOrder request)
        {            
            await _context.PurchaseOrders.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<Order> Order(Order request)
        {            
            await _context.ReserveOrders.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<CommitPurchaseOrder> CommitPurchaseOrder(CommitPurchaseOrder request)
        {            
            await _context.CommitPurchaseOrders.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<COPLog> COPLog(COPLog request)
        {            
            await _context.COPLogs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<COLog> COLog(COLog request)
        {            
            await _context.COLogs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<CommitOrder> CommitOrder(CommitOrder request)
        {            
            await _context.CommitOrders.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<RequestLog> RequestLog(RequestLog request)
        {            
            await _context.RequestLogs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;

        }
        public async Task<Request> GetRequest(int id)
        {
            var  result = await _context.Requests.FirstOrDefaultAsync(u => u.Id == id);
            
            return result;

        }

        public async Task<IEnumerable<Request>> GetRequests()
        {
            var  request = await _context.Requests.ToListAsync();

            return request;
        }
    }
}