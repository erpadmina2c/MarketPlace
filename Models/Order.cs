using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Order
    {
        public int id {get; set;}
        public int make_id {get; set;}
        public int model_id {get; set;}
        public int processor_id {get; set;}
        public int o_qty {get; set;}
        public string o_num {get; set;}
        public string c_name {get; set;}
        public int user_id {get; set;}
        public int status {get; set;}
        public DateTime e_edd {get; set;}
        public DateTime created_at {get; set;}
        public DateTime updated_at {get; set;}
        public int updated_by {get; set;}

    }
}