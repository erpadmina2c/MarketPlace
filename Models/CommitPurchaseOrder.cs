using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CheckpointInventoryStock.API.Models
{
    public class CommitPurchaseOrder
    {
        public int id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string cpo_num{ get; set; }
        public int emp_id{ get; set; }
        public string po_num{ get; set; }
        public string uk_po_num{ get; set; }
        public int make_id{ get; set; }
        public int model_id{ get; set; }
        public int proc_id{ get; set; }
        public int cpo_qty{ get; set; }
        public decimal cpo_price{ get; set; }
        public string s_name{ get; set; }
        public DateTime cpo_eta{ get; set; }
        public DateTime cpo_ped{ get; set; }
        public DateTime? receive_date{ get; set; }
        public int cpo_status{ get; set; }
        public string comment{ get; set; }        
        public int ref_id{ get; set; }
        public DateTime created_at{ get; set; }
        public DateTime updated_at{ get; set; }
        public int updated_by{ get; set; }
    }
}