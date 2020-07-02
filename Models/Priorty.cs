using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Priorty
    {
        
        public int Id { get; set; }
        public string PriortyName { get; set; }
        public string TimeLimit { get; set; }
        public int Status { get; set; }
        public DateTime CreateDate { get; set; }
    }
}