using System;

namespace CheckpointInventoryStock.API.Models
{
    public class ProcReportSetting
    {
        public int id {get; set; }
        public int user_id {get; set; }
        public int proc_id {get; set; }
        public int status {get; set; }
        public int s_type {get; set; }
        public DateTime created_at {get; set; }
        public DateTime updated_at {get; set; }
    }
}