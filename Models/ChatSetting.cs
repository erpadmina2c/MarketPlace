using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ChatSetting
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int chat_type { get; set; }
        public int status { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
                
    }
}