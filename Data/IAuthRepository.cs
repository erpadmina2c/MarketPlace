using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<UserRole> UserRole(UserRole userrole);
         Task<User> Login(string username, string password);
         Task<bool> UserExists(string username);
    }
}