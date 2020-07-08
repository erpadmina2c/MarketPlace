namespace CheckpointInventoryStock.API.Models
{
    public class ShortfallList
    {   
        public int id {get; set; }
        public string make_name {get; set;}	
        public string model_name {get; set;}
        public string processor {get; set;}
        public string filtermonth1 {get; set;}
        public string filtermonth2 {get; set;}
        public string filtermonth3 {get; set;}
        public string filtermonth4 {get; set;}
        public string filtermonth5 {get; set;}
        public string filtermonth6 {get; set;}
    }
}