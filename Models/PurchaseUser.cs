using System;

namespace CheckpointInventoryStock.API.Models
{
    public class PurchaseUser
    {
        
        public int id { get; set; }
        public string p_name { get; set; }
        public string email { get; set; }
        public int type { get; set; }
        public int status { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }
}