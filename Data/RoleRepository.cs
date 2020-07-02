using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class RoleRepository : IRoleRepository
    {
        private readonly DataContext _context;
        public RoleRepository(DataContext context)
        {
            _context = context;

        }
        public Task<IEnumerable<Role>> GetRole()
        {
            throw new System.NotImplementedException();
        }
        public async Task<Role> Role(Role role)
        {
            await _context.Roles.AddAsync(role);
            await _context.SaveChangesAsync();
            
            return role;
        }
        public async Task<RoleAccess> RoleAccess(RoleAccess role)
        {
            await _context.RoleAccess.AddAsync(role);
            await _context.SaveChangesAsync();
            
            return role;
        }
    }
}