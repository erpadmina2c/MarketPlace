using System;

namespace CheckpointInventoryStock.API.Models
{
    public class COPLog
    {
        public int id { get; set; }
        public int ref_id { get; set; }
        public string po_num{ get; set; }
        public string uk_po_num{ get; set; }
        public int cpo_qty { get; set; }
        public decimal cpo_price { get; set; }
        public int flag { get; set; }
        public int user_id { get; set; }
        public string comment { get; set; }
        public DateTime cpo_eta { get; set; }
        public DateTime cpo_ped{ get; set; }
        public DateTime? receive_date{ get; set; }
        public DateTime created_at { get; set; }

    }
}