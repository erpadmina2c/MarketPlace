using System;
using System.Collections.Generic;

namespace CheckpointInventoryStock.API.Models
{
    public class User
    {

        public int Id { get; set; }
        public string username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Gender { get; set; }  
        public DateTime DateOfBirth { get; set; }
        public string Company { get; set; }
        public string Reg_no { get; set; }
        public string KnownAs { get; set; }
        public string mobile_no { get; set; }
        public string tel_no { get; set; }
        public string token { get; set; }
        public int active { get; set; }
        public DateTime LastActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        
    }
}