using System;
using System.ComponentModel.DataAnnotations;

namespace CheckpointInventoryStock.API.Models
{
    public class ProcessorMaster
    {
        [Key]
        public int ProcessorId { get; set; }
        public string Processor { get; set; }
        
    }
}