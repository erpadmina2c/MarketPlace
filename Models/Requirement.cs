using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Requirement
    {
        public int Id { get; set; }
        public int MakeId { get; set; }
        public int ModelId { get; set; }
        public int ProcessorId { get; set; }
        public int Qty { get; set; }
        public int UserId { get; set; }
        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}