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
         Task<COPLog> COPLog(COPLog request);
         Task<COLog> COLog(COLog request);
         Task<CommitPurchaseOrder> CommitPurchaseOrder(CommitPurchaseOrder request);
         Task<CommitOrder> CommitOrder(CommitOrder request);
         Task<Order> Order(Order request);
         Task<RequestLog> RequestLog(RequestLog request);
         Task<IEnumerable<Request>> GetRequests();
         Task<ITAD> ITAD(ITAD request);
    }
}