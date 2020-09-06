using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CODetailsList
    {
        public int id { get; set; }
        public string col_num { get; set; }
        public int col_qty { get; set; }
        public string col_comment { get; set; }
        public string col_flag { get; set; }
        public string col_username { get; set; }
        public DateTime col_created_at { get; set; }
        
    }
}