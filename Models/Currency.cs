using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Currency
    {
        public int id { get; set; }
        public string text { get; set; }
        public string icon { get; set; }
        public DateTime created_at { get; set; }
    }
}