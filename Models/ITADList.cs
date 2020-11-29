using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ITADList
    {
        public int id { get; set; }
        public int p_type{ get; set; }
        public string p_title { get; set; }
        public int make_id { get; set; }
        public string make_name { get; set; }
        public string model_name { get; set; }
        public int cpu_id { get; set; }
        public string cpu_name { get; set; }
        public int gen_id { get; set; }
        public string gen_name { get; set; }
        public int ram_id { get; set; }
        public string ram_name { get; set; }
        public int hdd_id { get; set; }
        public string hdd_name { get; set; }
        public int adp_id { get; set; }
        public string adp_name { get; set; }
        public string form_factor { get; set; }
        public string lang_name { get; set; }
        public int qty { get; set; }
        public string itad_cur { get; set; }
        public decimal price { get; set; }
        public string loc_name { get; set; }
        public DateTime p_eta { get; set; }
        public string p_url { get; set; }
        public int user_id { get; set; }
        public string comment { get; set; }
        public string username { get; set; }
        public string company { get; set; }
        public int status { get; set; }
        public string stock_type { get; set; }
        public int chatviewcount { get; set; }
        public int chatCount { get; set; }
        public DateTime created_at { get; set; }
    }
}