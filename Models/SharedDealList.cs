using System;

namespace CheckpointInventoryStock.API.Models
{
    public class SharedDealList
    {
        
        public int Id { get; set; }
        public string s_id { get; set; }
        public string shared_by { get; set; }
        public string sharedwith { get; set; }
        public int s_qty { get; set; }
        public string s_currency { get; set; }
        public decimal s_price { get; set; }
        public DateTime shared_date { get; set; }
        public string RequestID { get; set; }
        public string MakeName { get; set; }
        public string ModelName { get; set; }
        public string Processor { get; set; }
        public string HddName { get; set; }
        public string RAMName { get; set; }
        public int Adapter { get; set; }
        public string AdapterName { get; set; }
        public int Qty { get; set; }
        public int Status { get; set; }
        public int flag { get; set; }
        public string Comment { get; set; }
        public decimal Price { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}