using System.ComponentModel.DataAnnotations;

namespace CheckpointInventoryStock.API.Dtos
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(12, MinimumLength = 4, ErrorMessage="Password should be between 4 to 12 char")]
        public string  Password { get; set; }
    }
}