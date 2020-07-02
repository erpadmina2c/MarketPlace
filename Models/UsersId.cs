namespace CheckpointInventoryStock.API.Models
{
    public class UsersId
    {
        
        public int[] options { get; set; }
        public string ReqNo1 { get; set; }
        public int emp_id { get; set; }
        public int s_qty { get; set; }
        public int r_cur { get; set; }
        public decimal s_price { get; set; }
        public string s_comment { get; set; }
        public bool s_flag { get; set; }
    }
}