using System;

namespace CheckpointInventoryStock.API.Models
{
    public class PurchaseOrder
    {
        public int id { get; set; }
        public string po_num{ get; set; }
        public int emp_id{ get; set; }
        public int make_id{ get; set; }
        public int model_id{ get; set; }
        public int proc_id{ get; set; }
        public int ram_id{ get; set; }
        public int hdd_id{ get; set; }
        public int gen_id{ get; set; }
        public int adp_id{ get; set; }
        public int po_qty{ get; set; }
        public decimal po_price{ get; set; }
        public int po_type{ get; set; }
        public string s_name{ get; set; }
        public int po_status{ get; set; }
        public string comment{ get; set; }
        
        public int ref_id{ get; set; }
        public DateTime created_at{ get; set; }
        public DateTime updated_at{ get; set; }
    }
}