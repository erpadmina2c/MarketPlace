using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class WorkshopRepository : IWorkshopRepository
    {
        private readonly DataContext _context;
        public WorkshopRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
           _context.Remove(entity);
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users                   
                                     .Include(p => p.Photos)    
                                     .Include(r => r.UserRoles)  
                                     .FirstOrDefaultAsync(u => u.Id == id);
            return user;

        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var  users = await _context.Users
                                       .Include(p => p.Photos)                                        
                                       .Include(r => r.UserRoles)
                                       .ToListAsync();

            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}