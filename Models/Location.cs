using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Location
    {
        
        public int id { get; set; }
        public string name { get; set; }
        public int status { get; set; }
        public DateTime createddate { get; set; }
    }
}