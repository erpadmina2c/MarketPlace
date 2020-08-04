using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Pricing
    {
        public int id { get; set; }
        public int make_id { get; set; }
        public int model_id { get; set; }
        public int proc_id { get; set; }
        public int hdd_id { get; set; }
        public int ram_id { get; set; }
        public int supplier_id { get; set; }
        public decimal price { get; set; }
        public int user_id { get; set; }       
        public DateTime purchase_date { get; set; } 
        public DateTime created_at { get; set; }
    }
}