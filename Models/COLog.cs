using System;

namespace CheckpointInventoryStock.API.Models
{
    public class COLog
    {
        public int id { get; set; }
        public int ref_id { get; set; }
        public string o_num { get; set; }
        public int o_type { get; set; }
        public int co_qty { get; set; }
        public string c_name { get; set; }
        public int flag { get; set; }
        public int user_id { get; set; }
        public string comment { get; set; }
        public DateTime co_edd { get; set; }
        public DateTime created_at { get; set; }
        
    }
}