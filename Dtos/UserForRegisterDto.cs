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
    }
}