namespace CheckpointInventoryStock.API.Dtos
{
    public class RequestForDetailedDto
    {
        public int Department { get; set; }
        public int Issue { get; set; }
        public string Comment { get; set; }
        public int Priorty { get; set; }
    }
}