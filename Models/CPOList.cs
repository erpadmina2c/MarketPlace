using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CPOList
    {
        public int id { get; set; }
        public string po_num { get; set; }
        public int emp_id { get; set; }
        public int ref_id { get; set; }
        public string user_name { get; set; }
        public int make_id { get; set; }
        public string make_name { get; set; }
        public int model_id { get; set; }
        public string model_name { get; set; }
        public int proc_id { get; set; }
        public string proc_name { get; set; }
        public int cpo_qty { get; set; }
        public decimal cpo_price { get; set; }
        public string s_name { get; set; }
        public int cpo_status { get; set; }
        public string comment { get; set; }
        public DateTime cpo_eta { get; set; }
        public DateTime cpo_ped { get; set; }
        public DateTime? receive_date { get; set; }
        public DateTime created_at { get; set; }    
        public int chatviewcount { get; set; }
        public int ChatCount { get; set; }    
    }
}