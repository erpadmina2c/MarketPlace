using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CheckpointInventoryStock.API.Models
{
    public class CommitOrder
    {        										
        public int id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string co_num { get; set; }
        public string o_num { get; set; }  
        public int make_id { get; set; }
        public int model_id { get; set; }
        public int proc_id { get; set; }
        public int o_type { get; set; }
        public int co_qty { get; set; }
        public string c_name { get; set; }
        public int emp_id { get; set; }
        public int co_status { get; set; }
        public DateTime co_edd { get; set; }
        public string comment { get; set; }
        public int booked_status { get; set; }  
        public DateTime created_at{ get; set; }
        public DateTime updated_at { get; set; }
        public int updated_by { get; set; }
    }
}