using System;

namespace CheckpointInventoryStock.API.Dtos
{
    public class UserForListDto
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string Email { get; set; }  
        public string Gender { get; set; }  
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PhotoUrl { get; set; }
        public string RoleID { get; set; }
    }
}