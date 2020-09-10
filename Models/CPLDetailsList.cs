using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CPLDetailsList
    {
        public int id { get; set; }
        public string po_num { get; set; }
        public int cpol_qty { get; set; }
        public decimal cpol_price { get; set; }
        public string cpol_comment { get; set; }
        public string cpol_flag { get; set; }
        public string cpol_username { get; set; }
        public DateTime? receive_date { get; set; }
        public DateTime cpo_eta { get; set; }
        public DateTime cpo_ped { get; set; }
        public DateTime cpol_created_at { get; set; }
    }
}