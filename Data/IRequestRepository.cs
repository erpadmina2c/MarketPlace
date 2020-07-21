using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IRequestRepository
    {
         Task<Request> Request(Request request);
         Task<Pricing> Pricing(Pricing request);
         Task<PurchaseOrder> PurchaseOrder(PurchaseOrder request);
         Task<Order> Order(Order request);
         Task<RequestLog> RequestLog(RequestLog request);
         Task<IEnumerable<Request>> GetRequests();
    }
}