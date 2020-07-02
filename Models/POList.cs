using System;

namespace CheckpointInventoryStock.API.Models
{
    public class POList
    {
        public int id { get; set; }
        public string po_num { get; set; }
        public string user_name { get; set; }
        public string make_name { get; set; }
        public string model_name { get; set; }
        public string proc_name { get; set; }
        public string hdd_name { get; set; }
        public string ram_name { get; set; }
        public string adp_name { get; set; }
        public string gen_name { get; set; }
        public int po_qty { get; set; }
        public decimal po_price { get; set; }
        public string type_name { get; set; }
        public string s_name { get; set; }
        public int po_status { get; set; }
        public string comment { get; set; }
        public DateTime created_at { get; set; }
    }
}