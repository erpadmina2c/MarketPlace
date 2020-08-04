using System;

namespace CheckpointInventoryStock.API.Models
{
    public class PricingList
    {
        public int id { get; set; }
        public int make_id { get; set; }
        public string make_name { get; set; }
        public int model_id { get; set; }
        public string model_name { get; set; }
        public int proc_id { get; set; }
        public string proc_name { get; set; }
        public int hdd_id { get; set; }
        public string hdd_name { get; set; }
        public int ram_id { get; set; }
        public string ram_name { get; set; }
        public int supplier_id { get; set; }
        public string supplier_name { get; set; }
        public decimal price { get; set; }
        public DateTime purchase_date { get; set; }
        public DateTime created_at { get; set; }
    }
}