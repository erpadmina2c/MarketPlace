using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<Companyprofile> Companyprofile(Companyprofile profile);
         Task<Photo> Photo(Photo photo);
         Task<UserRole> UserRole(UserRole userrole);
         Task<User> Login(string username, string password, int active);
         Task<LoginLog> LoginLog(LoginLog request);
         Task<bool> UserExists(string username);
         Task<bool> EmailExists(string email);
         Task<bool> MobileExists(string mobile_no);
         Task<bool> CheckPass(string username, string password);
    }
}