using System;

namespace CheckpointInventoryStock.API.Models
{
    public class DealOfferList
    {
        public int Id { get; set; }
        public int int_id { get; set; }	
        public string RequestID { get; set; }	
        public string c_name { get; set; }
        public int c_type { get; set; }
        public string deal_id { get; set; }
        public string MakeName { get; set; }
        public string ModelName { get; set; }
        public string Processor { get; set; }
        public string hddname { get; set; }
        public string ramname { get; set; }
        public string genname { get; set; }
        public int Adapter { get; set; }
        public int Qty { get; set; }
        public decimal Price { get; set; }
        public int Flag { get; set; }
        public int Status { get; set; }
        public string comment { get; set; }
        public string deal_reason { get; set; }
        public string deal_comment { get; set; }
        public string Username { get; set; }
        public string appby { get; set; }
        public string rejby { get; set; }
        public string poby { get; set; }
        public int purchaseqty { get; set; }
        public string purchaseby { get; set; }
        public int receiveqty { get; set; }
        public string receiveby { get; set; }
        public int dispatchqty { get; set; }
        public string dispatchby { get; set; }
        public string ponum { get; set; }
        public int EmpId { get; set; }
        public string ProjectName { get; set; }
        public int chat_count { get; set; }
        public DateTime CreatedDate  { get; set; }

    }
}