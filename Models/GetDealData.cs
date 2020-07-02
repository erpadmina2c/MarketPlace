using System;

namespace CheckpointInventoryStock.API.Models
{
    public class GetDealData
    {
        public int id {get; set; }
        public string req_id {get; set; }
        public string make_name {get; set;}	
        public string model_name {get; set;}
        public string processor {get; set;}
        public string hdd_name {get; set; }
        public string ram_name {get; set; }
        public string type_name {get; set; }
        public string gen_name {get; set; }
        public string adp_name {get; set; }
        public string c_name {get; set; }
        public int qty {get; set;}
        public decimal price {get; set; }
        public string user_name {get; set; }
        public int chat_count {get; set;}
        public DateTime created_at {get; set; }
    }
}