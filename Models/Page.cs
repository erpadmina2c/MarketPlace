namespace CheckpointInventoryStock.API.Models
{
    public class Page
    {
        public int id {get; set; }
        public string page_name {get; set; }
        public string page_url {get; set; }
        public string parent_name {get; set; }
        public int parent_id {get; set; }
        public string icon {get; set; }

        
    }
}