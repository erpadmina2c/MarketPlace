using System;

namespace CheckpointInventoryStock.API.Models
{
    public class EmailSetting
    {
        public int id { get; set; }
        public int role_id { get; set; }
        public string e_type { get; set; }
        public int status { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }

    }
}