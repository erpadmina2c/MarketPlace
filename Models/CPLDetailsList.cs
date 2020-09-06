using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CPLDetailsList
    {
        public int id { get; set; }
        public string cpol_num { get; set; }
        public int cpol_qty { get; set; }
        public decimal cpol_price { get; set; }
        public string cpol_comment { get; set; }
        public string cpol_flag { get; set; }
        public string cpol_username { get; set; }
        public DateTime cpol_created_at { get; set; }
    }
}