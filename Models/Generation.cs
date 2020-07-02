using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Generation
    {
        public int id { get; set; }
        public string text { get; set; }
        public int status { get; set; }
        public DateTime created_at { get; set; }
    }
}