namespace CheckpointInventoryStock.API.Models
{
    public class ActiveModel
    {
        public int id {get; set; }
        public int model_id {get; set; }
        public string model_name {get; set; }
        public int model_status {get; set; }
    }
}