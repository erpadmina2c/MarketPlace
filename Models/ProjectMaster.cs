using System;
using System.ComponentModel.DataAnnotations;

namespace CheckpointInventoryStock.API.Models
{
    public class ProjectMaster
    {
        [Key]
        public int PM_Id {get; set; }
        public string ProjectName {get; set; }
        public int Status {get; set; }
        public DateTime CreatedDate	{get; set; }
    }
}