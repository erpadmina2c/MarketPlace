using System;

namespace CheckpointInventoryStock.API.Models
{
    public class SpectDetail
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int ParentId { get; set; }
        public decimal Price { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}