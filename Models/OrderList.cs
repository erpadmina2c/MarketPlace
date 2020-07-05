using System;

namespace CheckpointInventoryStock.API.Models
{
    public class OrderList
    {
        public int id {get; set; }
        public string MakeName {get; set; }
        public string ModelName {get; set; }
        public string Processor {get; set; }
        public int o_qty {get; set; }
        public string o_num {get; set; }
        public string c_name {get; set; }
        public string Username {get; set; }
        public int status {get; set; }
        public DateTime e_edd {get; set; }
        public DateTime created_at {get; set; }
    }
}