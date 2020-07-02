using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string DepName { get; set; }
        public int Status { get; set; }
        public DateTime CreateDate { get; set; }
    }
}