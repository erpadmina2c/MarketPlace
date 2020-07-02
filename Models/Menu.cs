using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Menu
    {
        public int id { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public string icon { get; set; }	
        public int parent_id { get; set; }
        public int is_main { get; set; }	
        public int priority { get; set; }	
        public DateTime created_at { get; set; }	
        public DateTime updated_at { get; set; }
    }
}