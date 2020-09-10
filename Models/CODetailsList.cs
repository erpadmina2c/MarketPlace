using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CODetailsList
    {
        public int id { get; set; }
        public string o_num { get; set; }        
        public int o_type { get; set; }
        public int col_qty { get; set; }
        public string col_comment { get; set; }
        public string col_flag { get; set; }
        public DateTime co_edd { get; set; }
        public string col_username { get; set; }
        public DateTime col_created_at { get; set; }
        
    }
}