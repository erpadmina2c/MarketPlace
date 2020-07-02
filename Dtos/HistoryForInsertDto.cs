using System;

namespace CheckpointInventoryStock.API.Dtos
{
    public class HistoryForInsertDto
    {
         public int Id { get; set; }
        public int RequestId { get; set; }
        public int EmpId { get; set; }
        public int Oldstatus { get; set; }
        public int Newstatus { get; set; }
        public string Comment { get; set; }
        public DateTime CreateDate { get; set; }
        
    }
}