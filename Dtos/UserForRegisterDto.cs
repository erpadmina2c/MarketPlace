using System.ComponentModel.DataAnnotations;

namespace CheckpointInventoryStock.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        public int Id { get; set; }
        public int RoleID { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage="Password should be between 4 to 12 char")]
        public string  Password { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Company { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string mobile_no { get; set; }
        public int active { get; set; }
    }
}