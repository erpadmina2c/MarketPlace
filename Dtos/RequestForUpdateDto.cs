namespace CheckpointInventoryStock.API.Dtos
{
    public class RequestForUpdateDto
    {
        public int Id { get; set; }
        public int Department { get; set; }
        public int Issue { get; set; }
        public string Comment { get; set; }
        public int Priorty { get; set; }
        public int Status { get; set; }
        
    }
}
