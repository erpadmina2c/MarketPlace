using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CheckpointInventoryStock.API.Models
{
    public class ShareDeal
    {
        public int id { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string s_id { get; set; }
        public int req_id { get; set; }
        public int emp_id { get; set; }
        public int s_qty { get; set; }
        public int r_cur { get; set; }
        public decimal s_price { get; set; }
        public int app_by { get; set; }
        public int status { get; set; }
        public int flag { get; set; }
        public string comment { get; set; }
        public string sharedwith { get; set; }
        public DateTime created_at { get; set; }
        public DateTime updated_at { get; set; }
    }
}