using System;

namespace CheckpointInventoryStock.API.Models
{
    public class POList
    {
        public int id { get; set; }
        public string po_num { get; set; }
        public int emp_id { get; set; }
        public string user_name { get; set; }
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
        public int adp_id { get; set; }
        public string adp_name { get; set; }
        public int gen_id { get; set; }
        public string gen_name { get; set; }
        public int po_type { get; set; }
        public int po_qty { get; set; }
        public decimal po_price { get; set; }
        public string type_name { get; set; }
        public string s_name { get; set; }
        public int po_status { get; set; }
        public string comment { get; set; }
        public DateTime po_eta { get; set; }
        public DateTime created_at { get; set; }
    }
}