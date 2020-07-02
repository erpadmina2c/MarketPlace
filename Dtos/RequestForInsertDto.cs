namespace CheckpointInventoryStock.API.Dtos
{
    public class RequestForInsertDto
    {
        
        public int Id { get; set; }
        public int Department { get; set; }
        public int Issue { get; set; }
        public string Comment { get; set; }
        public int Priorty { get; set; }
    }
}