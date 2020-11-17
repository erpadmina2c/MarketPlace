namespace CheckpointInventoryStock.API.Models
{
    public class EmailSend
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string subject { get; set; }
        public string text { get; set; }
    }
}