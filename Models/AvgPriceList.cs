namespace CheckpointInventoryStock.API.Models
{
    public class AvgPriceList
    {
        public int id {get; set; }
        public string make_name {get; set; }
        public string model_name {get; set; }
        public string proc_name {get; set; }
        public string hdd_name {get; set; }
        public string ram_name {get; set; }
        public string supplier_name {get; set; }
        public int qty {get; set; }
        public decimal avg_price {get; set; }
    }
}