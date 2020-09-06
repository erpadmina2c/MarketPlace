using System;

namespace CheckpointInventoryStock.API.Models
{
    public class CommitOrderList
    {
        public int id {get; set; }
        public string MakeName {get; set; }
        public int make_id {get; set; }
        public string ModelName {get; set; }
        public int model_id {get; set; }
        public string Processor {get; set; }
        public int proc_id {get; set; }
        public int co_qty {get; set; }
        public string co_num {get; set; }
        public string c_name {get; set; }
        public string Username {get; set; }
        public int co_status {get; set; }
        public DateTime co_edd {get; set; }
        public string comment {get; set; }
        public DateTime created_at {get; set; }
    }
}