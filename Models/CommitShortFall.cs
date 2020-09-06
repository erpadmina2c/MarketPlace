namespace CheckpointInventoryStock.API.Models
{
    public class CommitShortFall
    {
        public int id { get; set; }
        public string model_name { get; set; }
        public string proc_name { get; set; }
        public int filtermonth1 { get; set; }
        public int filtermonth2 { get; set; }
        public int filtermonth3 { get; set; }
        public int filtertotal { get; set; }

    }
}