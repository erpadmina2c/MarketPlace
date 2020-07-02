using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public interface IRoleRepository
    {
         
         Task<Role> Role(Role history);
         Task<RoleAccess> RoleAccess(RoleAccess history);
         Task<IEnumerable<Role>> GetRole();
    }
}