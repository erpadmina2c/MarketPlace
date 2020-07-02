using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CheckpointInventoryStock.API.Models
{
    public class Request
    {
        
        public int Id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string RequestID { get; set; }
        public int MakeId { get; set; } 
        public int ModelId { get; set; }
        public int ProcessorId { get; set; }
        public int HDD { get; set; }
        public int RAM { get; set; }
        public int gen_id { get; set; }
        public int loc_id { get; set; }
        public int Adapter { get; set; }
        public string Cname { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; }
        public string Comment { get; set; }
        public int UserId { get; set; }
        public int Status { get; set; }
        public int Flag { get; set; }
        public int Type { get; set; }
        public int req_type { get; set; }
        public DateTime CreatedDate { get; set; }

    }
}