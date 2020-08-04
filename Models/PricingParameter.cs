namespace CheckpointInventoryStock.API.Models
{
    public class PricingParameter
    {
        public int make_id { get; set; }
        public int model_id { get; set; }
        public int proc_id { get; set; }
        public int hdd_id { get; set; }
        public int ram_id { get; set; }
        public int supplier_id { get; set; }
        public int type { get; set; }
        public string start { get; set; }
        public string end { get; set; }
    }
}