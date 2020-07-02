using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CheckpointInventoryStock.API.Models
{
    public class History
    {
        public int Id { get; set; }
        public string RequestId { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public string deal_id { get; set; }
        public string p_num { get; set; }
        public int EmpId { get; set; }
        public int HDD { get; set; }
        public int RAM { get; set; }
        public int Adapter { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; }
        public int app_by { get; set; }
        public int rej_by { get; set; }
        public int po_by { get; set; }
        public int p_by { get; set; }
        public int r_by { get; set; }
        public int d_by { get; set; }
        public int Status { get; set; }
        public int Flag { get; set; }
        public string Comment { get; set; }
        public string Reason { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ModifyDate { get; set; }

        internal object count()
        {
            throw new NotImplementedException();
        }
    }
}