using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IRoleRepository
    {
         
         Task<Role> Role(Role role);
         Task<RoleAccess> RoleAccess(RoleAccess roleaccess);
         Task<EmailSetting> EmailSetting(EmailSetting email);
         Task<IEnumerable<Role>> GetRole();
    }
}