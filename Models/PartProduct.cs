using System;
namespace CheckpointInventoryStock.API.Models
{
    public class PartProduct
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public int ParentId { get; set; }
        public int Type { get; set; }
        public DateTime CreatedDate { get; set; }
        
    }
}