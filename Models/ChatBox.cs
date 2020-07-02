using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ChatBox
    {
        public int id { get; set; }
        public int ref_Id { get; set; }
        public int u_Id { get; set; }
        public string text { get; set; }
        public int status { get; set; }
        public DateTime createdDate { get; set; }
        
    }
}

