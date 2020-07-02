using System;

namespace CheckpointInventoryStock.API.Models
{
    public class RequirementList
    {
        public int Id { get; set; }
        public string RequestID { get; set; }
        public string MakeName { get; set; }
        public string ModelName { get; set; }
        public string Processor { get; set; }
        public string HddName { get; set; }
        public string RAMName { get; set; }
        public int Adapter { get; set; }
        public string AdapterName { get; set; }
        public string GenName { get; set; }
        public string reqlocation { get; set; }
        public string Cname { get; set; }
        public int Qty { get; set; }
        public int Status { get; set; }
        public string Comment { get; set; }
        public decimal Price { get; set; }
        public int Type { get; set; }
        public string TypeName { get; set; }
        public int UserId { get; set; }
        public int Flag { get; set; }
        public string Username { get; set; }
        public int DealCount { get; set; }
        public int ChatCount { get; set; }
        public int chatviewcount { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}