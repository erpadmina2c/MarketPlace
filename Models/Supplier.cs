using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Supplier
    {
        public int id { get; set; }
        public string text { get; set; }
        public DateTime created_at { get; set; }
    }
}