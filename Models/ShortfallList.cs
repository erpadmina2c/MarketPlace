namespace CheckpointInventoryStock.API.Models
{
    public class ShortfallList
    {   
        public int id {get; set; }
        public string make_name {get; set;}	
        public string model_name {get; set;}
        public string processor {get; set;}
        public int req_qty {get; set;}
        public int available_qty {get; set;}
        public int ord_qty {get; set;}
        public int approved_qty {get; set;}
        public int required_qty {get; set;}
    }
}