namespace CheckpointInventoryStock.API.Models
{
    public class RequestList
    {
        public int Id { get; set; }
        public Department Department { get; set; }
        public Issue Issue { get; set; }
        public string Comment { get; set; }
        public Priorty Priorty { get; set; }
    }
}