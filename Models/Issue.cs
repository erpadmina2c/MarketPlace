using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Issue
    {
        public int Id { get; set; }
        public string IssueName { get; set; }
        public int Status { get; set; }
        public DateTime CreateDate { get; set; }
    }
}