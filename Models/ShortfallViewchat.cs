using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ShortfallViewchat
    {
        
        public int id { get; set; }
        public int chat_id { get; set; }
        public int ref_id { get; set; }
        public int user_id { get; set; }
        public int type { get; set; }
        public DateTime created_at { get; set; }
    }
}