using System;

namespace CheckpointInventoryStock.API.Models
{
    public class LoginLog
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public DateTime? login { get; set; }
        public DateTime? logout { get; set; }
    }
}