using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ITADSuplier
    {
        public int id {get; set;}
        public string user_name {get; set;}
        public string profile_url {get; set;}

        public string email {get; set;}
        public string mobile_no {get; set;}
        public string tel_no {get; set;}
        public string company {get; set;}
        public string reg_no {get; set;}
        public string city {get; set;}
        public string country {get; set;}
        public int log_count {get; set;}	
        public int itad_count {get; set;}	
        public int active {get; set;}
        public DateTime last_active {get; set;}
        public DateTime created_at {get; set;}
    }
}